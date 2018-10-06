import { Injectable } from '@angular/core';
import {Validators} from '@angular/forms';

export const projectValidator = {
  title: [
    Validators.required,
  ],
  description: [
    Validators.required,
  ],
  from: [
    Validators.required,
  ],
  to: [
    Validators.required,
  ],
  term: [
    Validators.required,
  ],
  type: [
    Validators.required,
  ],
  category: [
    Validators.required,
  ],
  experience: [
    Validators.required,
  ],
  skills: [
    Validators.required,
  ],
};


@Injectable({
  providedIn: 'root'
})

export class ValidationService {

  constructor() { }

  getProjectValidator() {
    return projectValidator;
  }
}
