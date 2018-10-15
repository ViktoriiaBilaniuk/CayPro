import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {fadeInAnimation} from '../../../../shared/animations/fade-in.animation';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ValidationService} from '../../../../core/services/validation.service';
import {
  BUDGET_MAX_VALUE,
  BUDGET_MIN_VALUE,
  BUDGET_OPTIONS,
  SKILLS_OPTIONS,
  TERM_FILTER_OPTIONS,
  TYPE_OPTIONS
} from '../projects-constants';
import {ProjectsService} from '../../../../core/services/projects/projects.service';
import {map, startWith} from "rxjs/operators";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {Observable} from "rxjs";
import {MatAutocompleteSelectedEvent} from "@angular/material";

@Component({
  selector: 'caypro-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
  animations: [fadeInAnimation],
})
export class AddProjectComponent implements OnInit {
  @Input() isPortfolio;
  @Output() onProjectSave = new EventEmitter();
  @ViewChild('skillsInput') skillsInput: ElementRef;

  documentForm: FormGroup;
  budgetFilterOptions = TERM_FILTER_OPTIONS;
  typeOptions = TYPE_OPTIONS;
  budgetOptions = BUDGET_OPTIONS;
  minValue = BUDGET_MIN_VALUE;
  maxValue = BUDGET_MAX_VALUE;
  formSubmitted = false;
  filteredOptions: Observable<string[]>;
  skillsOptions = SKILLS_OPTIONS;
  separatorKeysCodes = [ENTER, COMMA];
  tags = [];

  constructor(
    private fb: FormBuilder,
    private validation: ValidationService,
    private projectService: ProjectsService) {
  }

  ngOnInit() {
    this.createForm();
    this.setAutocomplete();
  }

  setAutocomplete() {
    this.filteredOptions = this.documentForm.controls['usedTechnologies'].valueChanges
      .pipe(
        startWith(null),
        map((option) => option ? this.tagsFilter(option) : this.skillsOptions.slice())
      );
  }

  tagsFilter(val) {
    const filterValue = val.toString().toLowerCase();
    return this.skillsOptions.filter(option => option.toString().toLowerCase().indexOf(filterValue) === 0);
  }

  createForm() {
    this.documentForm = this.fb.group({
      title: ['', this.validation.getProjectValidator().title],
      description: ['', this.validation.getProjectValidator().description],
      budget: this.fb.group({
        from: ['', this.validation.getProjectValidator().from],
        to: ['', this.validation.getProjectValidator().to],
      }),
      term: ['', this.validation.getProjectValidator().term],
      type: ['', this.validation.getProjectValidator().type],
      team: [],
      usedTechnologies: []
    });
  }

  save() {
    if (!this.isPortfolio) {
      this.formSubmitted = true;
    } else {
      this.onProjectSave.emit(this.documentForm.value);
    }
  }

  close(): void {
    if (this.isPortfolio) {
      this.onProjectSave.emit();
    }
  }

  budgetFromChange(event) {
    this.documentForm.controls.budget.patchValue({from: event});
  }

  budgetToChange(event) {
    this.documentForm.controls.budget.patchValue({to: event});
  }

  removeTag(tag) {
    this.tags = this.tags.filter(optionTag => tag.value !== optionTag['value']);
    this.addTagOption(tag);
    this.documentForm.controls.tags.patchValue(this.tags);
  }

  addTagOption(tag) {
    const index = this.skillsOptions.indexOf(tag);
    if (index < 0) {
      this.skillsOptions.push(tag);
    }
  }

  selectedTag(event: MatAutocompleteSelectedEvent) {
    const tags = this.tags.slice();
    tags.push( event.option.value);
    this.documentForm.controls['usedTechnologies'].patchValue(tags);
    this.tags.push(event.option.value);
    this.removeTagOption(event.option.value);
    this.clearTagsInput();
  }

  clearTagsInput() {
    this.skillsInput.nativeElement.value = '';
  }

  removeTagOption(tag) {
    this.skillsOptions = this.skillsOptions.filter(optionTag => tag !== optionTag);
  }

  onFormSave(team) {
    this.documentForm.patchValue({team: team});
    this.projectService.addProject(this.documentForm.value);
    console.log(this.documentForm.value);
  }

}
