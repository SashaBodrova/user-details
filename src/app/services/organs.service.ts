import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrgansService {
  organs = [
    { name: 'Heart', status: 'On'},
    { name: 'Lungs', status: 'Off'},
  ]

  addOrgan(name: string, status: string) {
    this.organs.push({ name, status})
    console.log(this.organs)
  }
}
