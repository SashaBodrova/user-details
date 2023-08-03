import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailRequestService {
  constructor() {
  }

  isEmailExist(email: string): Observable<boolean> {
    if(email === 'leela@mail.ru') {
      return of(true)
    }
    return of(false)
  }
}
