import {Component, Input, OnInit} from '@angular/core';
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

  navigateFrom;
  companies;
  projectSkills = [];
  constantSkills = SKILLS_OPTIONS as any;
  @Input() project;

  constructor(
    private suitableService: SuitableService,
    private projectsService: ProjectsService,
    private companyServoce: CompanyService
  ) { }

  ngOnInit() {
    this.companyServoce.getAllCompanies();
    this.navigateFrom = this.suitableService.navigateFrom;
    this.getProjectsSkills();
  }

  getProjectsSkills() {
    this.setNumericVauesForConstantSkills();
    this.companyServoce.companies
      .subscribe(data => {
        if (data) {
          this.companies = data.slice();
          this.setCompaniesSkills();
          this.getCurrentProjectSkills();
          this.transformAllsSkillsToNumeric();
          this.calculateSimilarity();
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
  }

  setCompaniesSkills() {
    this.companies.map(company => {
      company.allSkills = [];
      company.allSkills.push(...company.skills);
      company.projects.forEach(project => {
        company.allSkills.push(...project.usedTechnologies);
      });
    });
  }

  getCurrentProjectSkills() {
    this.projectSkills.push(...this.project.skills);
    this.project.allSkills = [];
    this.project.team.map(teamMember => {
      this.project.allSkills.push(...teamMember.skills);
    });
  }

  transformAllsSkillsToNumeric() {
    this.companies.map(company => {
      company.allSkillsInNumeric = [];
      company.allSkills.forEach(skill => {
        company.allSkillsInNumeric.push(this.transformWordIntoNumeric(skill));
      });
    });
    this.project.allSkillsInNumeric = [];
    this.project.allSkills.forEach(skill => {
      this.project.allSkillsInNumeric.push(this.transformWordIntoNumeric(skill));
    });
  }

  transformWordIntoNumeric(skill) {
    return this.constantSkills.filter((constantSkill: any) => skill === constantSkill.value)[0];
  }

  calculateSimilarity() {
    this.calculateSuitablePoints();
    this.calculatePercentSimilarity();
    this.sortCompanies();
  }

  calculateSuitablePoints() {
    this.project.allSkillsInNumeric.forEach(
      projectSkill => {
        this.companies.forEach(company => {
          company.suitablePoints = 0;
          if (projectSkill.number ){
            const exist = company.allSkillsInNumeric.find(companySkill => {
              if (companySkill && companySkill.number) {
                return companySkill.number === projectSkill.number;
              } else {
                return false;
              }
            });
            if (exist) {
              company.suitablePoints++;
            }
          }
        });
      }
    )
  }

  calculatePercentSimilarity() {
    const projectSkillLength = this.project.allSkillsInNumeric.length;
    this.companies.forEach(company => {
      company.presentSimilarity = company.suitablePoints * 100 / projectSkillLength;
    });
  }

  sortCompanies() {
    this.companies.sort((a, b) => b.presentSimilarity - a.presentSimilarity);
  }




}
