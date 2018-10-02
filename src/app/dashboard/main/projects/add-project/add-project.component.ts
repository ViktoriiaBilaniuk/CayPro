import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from '../../../../shared/animations/fade-in.animation';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ValidationService} from '../../../../core/services/validation.service';
import {BUDGET_MAX_VALUE, BUDGET_MIN_VALUE, BUDGET_OPTIONS, TERM_FILTER_OPTIONS, TYPE_OPTIONS} from '../projects-constants';

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

  constructor(
    private fb: FormBuilder,
    private validation: ValidationService,
  ) { }

  ngOnInit() {
    this.createForm();
    this.setAutocomplete();
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

  setAutocomplete() {

  }

}
