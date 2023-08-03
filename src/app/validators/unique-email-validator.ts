import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { catchError, map, Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import { EmailRequestService } from "../services/email-request.service";

@Injectable({ providedIn: 'root' })
export class UniqueEmailValidator implements AsyncValidator {
  constructor(private emailRequest: EmailRequestService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.emailRequest.isEmailExist(control.value).pipe(
      map(emailExist => (emailExist ? { isEmailExist: true } : null)),
      catchError(() => of(null))
    )
  }
}
