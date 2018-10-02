import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {ValidationService} from '../../../../../../core/services/validation.service';

@Component({
  selector: 'caypro-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teamForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private validation: ValidationService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.teamForm = this.fb.group({
      team: this.fb.array([this.createItem()])
    });
  }

  createItem(): FormGroup {
    return this.fb.group({
      category: ['', this.validation.getProjectValidator().category],
      experience: ['', this.validation.getProjectValidator().experience],
      skills: [[], this.validation.getProjectValidator().skills]
    });
  }

  addTeamMember() {

  }

  get team() {
    return <FormArray>this.teamForm.get('team') as FormArray;
  }

}
