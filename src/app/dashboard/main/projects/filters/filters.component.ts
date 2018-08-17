import { Component, OnInit } from '@angular/core';
import {BUDGET_MAX_VALUE, BUDGET_MIN_VALUE, BUDGET_OPTIONS, TEAM_FILTER_OPTIONS, TERM_FILTER_OPTIONS} from '../projects-constants';

@Component({
  selector: 'caypro-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  budgetFilterOptions = TERM_FILTER_OPTIONS;
  teamFilterOptions = TEAM_FILTER_OPTIONS;
  minValue = BUDGET_MIN_VALUE;
  maxValue = BUDGET_MAX_VALUE;
  options = BUDGET_OPTIONS;
  selectedBudgetFilterOption = this.budgetFilterOptions[0];
  selectedTeamFilterOption = this.teamFilterOptions[0];


  constructor() { }

  ngOnInit() {
  }

}
