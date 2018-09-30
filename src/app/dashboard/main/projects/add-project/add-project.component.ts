import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from '../../../../shared/animations/fade-in.animation';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'caypro-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
  animations: [fadeInAnimation],
})
export class AddProjectComponent implements OnInit {

  documentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm();
    this.setAutocomplete();
  }

  createForm() {
    this.documentForm = this.fb.group({
      title: '',
      description: '',
      budget: { from: 0, to: 0 },
      time: '',
      type: '',
      team: ''



    });
  }

  setAutocomplete() {

  }

}
