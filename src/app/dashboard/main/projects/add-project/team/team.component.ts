import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {ValidationService} from '../../../../../core/services/validation.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {CATEGORY_FILTER_OPTIONS, SKILLS_OPTIONS} from "../../projects-constants";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {MatAutocompleteSelectedEvent} from "@angular/material";

@Component({
  selector: 'caypro-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnChanges {
  @ViewChild('tagsInput') tagsInput: ElementRef;
  @Input() formSubmitted;
  @Output() onFormSave = new EventEmitter();
  teamForm: FormGroup;
  categoryFilterOptions = CATEGORY_FILTER_OPTIONS;
  separatorKeysCodes = [ENTER, COMMA];
  tags = [];
  filteredOptions = [];
  skillsOptions = SKILLS_OPTIONS;

  constructor(
    private fb: FormBuilder,
    private validation: ValidationService) {
  }

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges() {
    if (this.formSubmitted) {
      this.onFormSave.emit(this.teamArray);
    }
  }

  get teamArray() {
    const team = this.teamForm.value.team;
    team.map((teamMember,index) => {
      if (this.tags[index]) {
        teamMember.skills = this.tags[index].slice();
      }
    });
    return team;
  }

  createForm() {
    this.teamForm = this.fb.group({
      team: this.fb.array([this.createItem()])
    });
    this.setAutocomplete(this.team.length - 1);
  }

  createItem(): FormGroup {
    return this.fb.group(this.emptyTeamObject);
  }

  addTeamMember() {
    this.team.insert(0, this.fb.group(this.createEmptyTeamMember()));
    this.setAutocomplete(this.team.length - 1);
  }

  setAutocomplete(index) {
    this.filteredOptions[index] = this.team.at(index).get('skills').valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
  }

  filter(val: string): string[] {
    return this.skillsOptions.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }

  createEmptyTeamMember() {
    return this.emptyTeamObject;
  }

  get emptyTeamObject() {
    return {
      category: ['', this.validation.getProjectValidator().category],
      experience: ['', this.validation.getProjectValidator().experience],
      skills: []
    };
  }

  get team() {
    return <FormArray>this.teamForm.get('team') as FormArray;
  }

  removeTeamMember(index) {
    this.team.removeAt(index);
    this.filteredOptions.splice(index, 1);
  }

  removeTag(tag, index) {
    this.tags[index] = this.tags[index].filter(optionTag => tag !== optionTag);
  }

  selectTag(event: MatAutocompleteSelectedEvent, index) {
    if (!this.tags[index]) {
      this.tags[index] = [];
    }
    this.tags[index].push(event.option.value);
    // this.teamForm.value.team[index].skills.push(event.option.value);

    // this.documentForm.controls['tags'].patchValue(tags);
    this.clearTagsInput(index);
  }

  clearTagsInput(index) {
    this.tagsInput.nativeElement.value = '';

  }


}
