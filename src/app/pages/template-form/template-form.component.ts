import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {
  @ViewChild('form') signUpForm!: NgForm
  submitted: boolean = false
  userData: {
    username: string,
    email: string,
    about: string,
    gender: string
  }
    = {
    username: '',
    email: '',
    about: '',
    gender: ''
  }

  about = ''

  fillValues() {
    this.signUpForm.form.patchValue({
      inputGroup: {
        username: 'Sasha',
        email: 'sasha@mail.ru'
      }
    })
  }

  onFormSubmit() {
    this.submitted = true
    this.userData.username = this.signUpForm.value.inputGroup.username
    this.userData.email = this.signUpForm.value.inputGroup.email
    this.userData.about = this.signUpForm.value.about
    this.userData.gender = this.signUpForm.value.gender

    this.signUpForm.reset()
  }

  // checkData() {
  //   console.log(this.signUpForm)
  // }

}
