import { Component, OnInit } from '@angular/core';
import {SuitableService} from "../../../core/services/suitable/suitable.service";
import * as tf from '@tensorflow/tfjs';
import {SKILLS_OPTIONS} from "../projects/projects-constants";
import {ProjectsService} from "../../../core/services/projects/projects.service";
import {CompanyService} from "../../../core/services/company/company.service";

@Component({
  selector: 'caypro-suitable',
  templateUrl: './suitable.component.html',
  styleUrls: ['./suitable.component.scss']
})
export class SuitableComponent implements OnInit {

  prediction: any;
  linearModel: tf.Sequential;
  company;
  navigateFrom;
  projects;
  companySkills = [];
  constantSkills = SKILLS_OPTIONS;
  selectedProject= [];

  constructor(
    private suitableService: SuitableService,
    private projectsService: ProjectsService,
  ) { }

  ngOnInit() {
    this.train();
    this.company = this.suitableService.company;
    console.log(this.company);
    this.navigateFrom = this.suitableService.navigateFrom;
    this.getProjectsSkills();
  }

  getProjectsSkills() {
    this.setNumericVauesForConstantSkills();
    this.projectsService.projects
      .subscribe(data => {
        if (data) {
          this.projects = data.slice();
          this.setProjectsSkill();
          this.getCurrentCompanySkills();
          this.transformAllProjectSkillsToNumeric();
        }
      });
  }

  setNumericVauesForConstantSkills() {
    this.constantSkills = this.constantSkills.map((skill, i) => {
      return {
        value: skill,
        number: i
      }
    });
    console.log(this.constantSkills);

  }

  setProjectsSkill() {
    this.projects.map(project => {
      project.allSkills = [];
      project.team.forEach(teamMember => {
        project.allSkills.push(...teamMember.skills)
      });
    });
  }

  getCurrentCompanySkills() {
    this.companySkills.push(...this.company.skills);
    this.company.projects.forEach(project => {
      this.companySkills.push(...project.usedTechnologies);
    });
  }

  transformAllProjectSkillsToNumeric() {
    this.projects.map(project => {
      project.allSkillsInNumeric = [];
      project.allSkills.forEach(skill => {
        project.allSkillsInNumeric.push(this.transformWordIntoNumeric(skill));
      });

    });
    console.log(this.projects);
  }

  transformWordIntoNumeric(skill) {
    console.log(this.constantSkills);
    return this.constantSkills.filter((constantSkill: any) => skill === constantSkill.value)[0];
  }


  async train(): Promise<any> {
    // Define a model for linear regression.
    this.linearModel = tf.sequential();
    this.linearModel.add(tf.layers.dense({units: 1, inputShape: [1]}));

    // Prepare the model for training: Specify the loss and the optimizer.
    this.linearModel.compile({loss: 'meanSquaredError', optimizer: 'sgd'});


    // Training data, completely random stuff
    const xs = tf.tensor1d([3.2, 4.4, 5.5]);
    const ys = tf.tensor1d([1.6, 2.7, 3.5]);


    // Train
    await this.linearModel.fit(xs, ys)

    console.log('model trained!')
  }

  predict(val: number) {
    const output = this.linearModel.predict(tf.tensor2d([val], [1, 1])) as any;
    this.prediction = Array.from(output.dataSync())[0];
    console.log(output,this.prediction, this.linearModel);
  }

}
