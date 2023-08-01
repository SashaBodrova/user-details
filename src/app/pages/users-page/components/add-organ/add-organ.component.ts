import { Component, ElementRef, ViewChild } from '@angular/core';
import { OrgansService } from "../../../../services/organs.service";

type organType = {
  name: string,
  status: string
}

@Component({
  selector: 'app-add-organ',
  templateUrl: './add-organ.component.html',
  styleUrls: ['./add-organ.component.scss']
})

export class AddOrganComponent {
  organName!: string
  @ViewChild('organInput') organInput!: ElementRef
  @ViewChild('organStatusInput') organStatusInput!: ElementRef
  // @Output() organAdded = new EventEmitter<organType>()

  constructor(private OrgansService: OrgansService) {
  }

  onOrganAdded() {
    this.OrgansService.addOrgan(this.organInput.nativeElement.value, this.organStatusInput.nativeElement.value)
  }
}
