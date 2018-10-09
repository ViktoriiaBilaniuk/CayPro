import {Component, Inject, OnInit} from '@angular/core';
import {fadeInAnimation} from '../../../../shared/animations/fade-in.animation';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ValidationService} from '../../../../core/services/validation.service';
import {BUDGET_MAX_VALUE, BUDGET_MIN_VALUE, BUDGET_OPTIONS, TERM_FILTER_OPTIONS, TYPE_OPTIONS} from '../projects-constants';
import {ProjectsService} from "../../../../core/services/projects/projects.service";
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'caypro-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
  animations: [fadeInAnimation],
})
export class AddProjectComponent implements OnInit {

  documentForm: FormGroup;
  budgetFilterOptions = TERM_FILTER_OPTIONS;
  typeOptions = TYPE_OPTIONS;
  budgetOptions = BUDGET_OPTIONS;
  minValue = BUDGET_MIN_VALUE;
  maxValue = BUDGET_MAX_VALUE;
  formSubmitted = false;
  isPortfolio;

  constructor(
    public dialogRef: MatDialogRef<AddProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private validation: ValidationService,
    private projectService: ProjectsService
  ) {
    if (data.isPortfolio) {
      this.isPortfolio = true;
    }
  }

  ngOnInit() {
    this.createForm();
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
    });
  }

  save() {
    if (!this.isPortfolio) {
      this.formSubmitted = true;
    } else {
      this.dialogRef.close(this.documentForm.value);

    }
  }

  close(): void {
    if (this.isPortfolio) {
      this.dialogRef.close();
    }
  }

  budgetFromChange(event) {
    this.documentForm.controls.budget.patchValue({from: event});
  }

  budgetToChange(event) {
    this.documentForm.controls.budget.patchValue({to: event});
  }

  onFormSave(team) {
    this.documentForm.patchValue({team: team});
    this.projectService.addProject(this.documentForm.value);
    console.log(this.documentForm.value);
  }

}
