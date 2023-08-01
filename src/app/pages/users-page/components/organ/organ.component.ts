import { Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-organ',
  templateUrl: './organ.component.html',
  styleUrls: ['./organ.component.scss']
})
export class OrganComponent implements OnInit {
  editOn: boolean = false
  @Input() organNameFromList: string = ''
  @ContentChild('ngContentRef') ngContentRef!: ElementRef
  @Input() organ!: { name: string, status: string }

  organStatusMessage: string = ''

  constructor(private router: Router) {}

  getOrganStatus() {
    return this.organ.status
  }

  ngOnInit() {
    if (this.organ.status === 'On') {
      return this.organStatusMessage = 'Great'
    }
    return this.organStatusMessage = 'Press F'
  }

  getColor() {
    if (this.organ.status === 'On') {
      return '#453b8a'
    }
    return 'transparent'
  }

  onStatusChanged() {
    if (this.organ.status === 'On') {
      this.organStatusMessage = 'Avada Kedavra'
      this.organ.status = 'Off'
    } else if (this.organ.status === 'Off') {
      this.organStatusMessage = "bubbububbub"
      this.organ.status = 'On'
    }
  }

  onOrganEdit() {
    this.editOn = !this.editOn
  }
}
