import { Component } from '@angular/core';
import {
  AbstractControl, AsyncValidator,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import { UniqueEmailValidator } from "../../validators/unique-email-validator";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  genders = ['male', 'female', 'other']
  restrictedNames: string[] = ['Leela']
  restrictedName = {nameIsRestricted: false}
  signUpForm: FormGroup
  // emailControl = new FormControl('', {asyncValidators: [this.uniqueEmailValidator.validate.bind(this.uniqueEmailValidator)],
  // updateOn: 'blur'})

  hobbies = new FormArray<FormControl<string | null>>([])

  constructor(private uniqueEmailValidator: UniqueEmailValidator) {
    this.signUpForm = new FormGroup<any>({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.isRestrictedNames(this.restrictedNames)]),
        'email': new FormControl(null,
          {
            validators: [Validators.required, Validators.email],
            asyncValidators: [this.uniqueEmailValidator.validate.bind(this.uniqueEmailValidator)],
            updateOn: 'blur'
          })
      }),
      'gender':
        new FormControl('female'),
      'hobbies':
      this.hobbies
    })
  }

  isRestrictedNames(restricredNames: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = this.restrictedNames.includes(control.value)
      return forbidden ? this.restrictedName = {nameIsRestricted: true} : null
    }
  }

  get hobbyControls() {
    return this.hobbies.controls
  }

  onSubmit() {
    console.log(this.signUpForm)
  }

  onValidation(path: string) {
    return (!this.signUpForm.get(path)?.valid && this.signUpForm.get(path)?.touched) ?? true
  }

  onAddHobby() {
    this.hobbies.push(new FormControl('', [Validators.required]))
  }
}
