import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidationMessages } from '@services/utils/validations/validation-messages.service';

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.scss'],
})
export class ErrorMessagesComponent implements OnInit {
  @Input()
  option: any
  show: boolean = true

  @Input('form')
  createForm: FormGroup
  listErrors

  constructor(public validationMessages: ValidationMessages) { }

  ngOnInit() { }

  get errorControl() {
    this.listErrors = this.createForm.get(this.option).errors
    this.show = this.listErrors != null || this.listErrors != undefined
    return this.createForm.get(this.option)
  }

  getError() {
    return this.validationMessages.validationMessages2(
      this.option,
      Object.keys(this.listErrors)[0],
      this.getErrorMessage()
    )
  }

  getErrorMessage() {
    let i: number = 0
    if (this.createForm.get(this.option).errors.min != null) {
      i = this.createForm.get(this.option).errors.min
    } else if (this.createForm.get(this.option).errors.max != null) {
      i = this.createForm.get(this.option).errors.max
    }
    return i
  }
}

