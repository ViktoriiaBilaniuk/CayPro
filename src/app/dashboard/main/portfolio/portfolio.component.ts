import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatDialog} from '@angular/material';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {SKILLS_OPTIONS} from '../projects/projects-constants';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {PortfolioProjectsComponent} from './portfolio-projects/portfolio-projects.component';
import {AddProjectComponent} from '../projects/add-project/add-project.component';
import {CompanyService} from '../../../core/services/company/company.service';

@Component({
  selector: 'caypro-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @ViewChild('tagsInput') tagsInput: ElementRef;
  portfolioForm: FormGroup;
  tags = [];
  tagOptions = SKILLS_OPTIONS;
  tagsFilteredOptions: Observable<any>;
  separatorKeysCodes = [ENTER, COMMA];
  projects = [];

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private companyService: CompanyService,
  ) { }

  ngOnInit() {
    this.createForm();
    this.setAutocomplete();
  }

  createForm() {
    this.portfolioForm = this.fb.group({
      name: '',
      description: '',
      size: 0,
      skills: [],
    });
  }

  setAutocomplete() {
    this.tagsFilteredOptions = this.portfolioForm.controls['skills'].valueChanges
      .pipe(
        startWith(null),
        map((option) => option ? this.tagsFilter(option) : this.tagOptions.slice())
      );
  }
  tagsFilter(val) {
    const filterValue = val.toString().toLowerCase();
    return this.tagOptions.filter(option => option.toString().toLowerCase().indexOf(filterValue) === 0);
  }

  removeTag(tag) {
    this.tags = this.tags.filter(optionTag => tag !== optionTag);
    this.addTagOption(tag);
    this.portfolioForm.controls.skills.patchValue(this.tags);
  }

  addTagOption(tag) {
    const index = this.tagOptions.indexOf(tag);
    if (index < 0) {
      this.tagOptions.push(tag);
    }
  }

  selectedTag(event: MatAutocompleteSelectedEvent) {
    const tags = this.tags.slice();
    tags.push( event.option.value);
    this.portfolioForm.controls['skills'].patchValue(tags);
    this.tags.push(event.option.value);
    this.removeTagOption(event.option.value);
    this.clearTagsInput();
  }

  removeTagOption(tag) {
    this.tagOptions = this.tagOptions.filter(optionTag => tag !== optionTag);
  }

  clearTagsInput() {
    this.tagsInput.nativeElement.value = '';
  }

  addProjectClick() {
    const dialogRef = this.dialog.open(AddProjectComponent, {
      width: '600px',
      data: {isPortfolio: true},
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.projects.push(result);
        console.log(result);
      }
    });
  }

  save() {
    const company = this.portfolioForm.value;
    company['projects'] = this.projects;
    console.log(company);
    this.companyService.addCompany(company);
  }

}
