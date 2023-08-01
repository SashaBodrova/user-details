import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  genders = ['male', 'female', 'other']
  signUpForm: FormGroup

  constructor() {
    this.signUpForm = new FormGroup<any>({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    })
  }

  get hobbyControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls
  }

  onSubmit() {
    console.log(this.signUpForm)
  }

  onValidation(path: string) {
    return !this.signUpForm.get(path)?.valid && this.signUpForm.get(path)?.touched
  }

  onAddHobby() {
    const control = new FormControl(null, [Validators.required]);
    (<FormArray>this.signUpForm.get('hobbies')).push(control)
  }
}
