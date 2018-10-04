import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {ValidationService} from '../../../../../../core/services/validation.service';
import {CATEGORY_FILTER_OPTIONS} from '../../../projects-constants';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'caypro-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teamForm: FormGroup;
  categoryFilterOptions = CATEGORY_FILTER_OPTIONS;
  separatorKeysCodes = [ENTER, COMMA];
  tags = [];
  constructor(
    private fb: FormBuilder,
    private validation: ValidationService) {
  }

  ngOnInit() {
    this.createForm();
    this.fillForm();
  }

  createForm() {
    this.teamForm = this.fb.group({
      team: this.fb.array([this.createItem()])
    });
  }

  fillForm() {
    const teamFormArray = this.fb.array([]);
    this.teamForm.setControl('assets', teamFormArray);
  }

  createItem(): FormGroup {
    return this.fb.group(this.emptyTeamObject);
  }

  addTeamMember() {
    this.team.insert(0, this.fb.group(this.createEmptyTeamMember()));
  }

  createEmptyTeamMember() {
    return this.emptyTeamObject;
  }

  get emptyTeamObject() {
    return {
      category: ['', this.validation.getProjectValidator().category],
      experience: ['', this.validation.getProjectValidator().experience],
      skills: [[], this.validation.getProjectValidator().skills]
    };
  }

  get team() {
    console.log(this.teamForm.get('team'));
    return <FormArray>this.teamForm.get('team') as FormArray;
  }

  removeTeamMember(index) {
    this.team.removeAt(index);
  }

  removeTag(tag) {
    this.tags = this.tags.filter(optionTag => tag.value !== optionTag['value']);
  }


}
