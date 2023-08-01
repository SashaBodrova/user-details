import { Component, OnInit } from '@angular/core';
import { OrgansService} from "../../../../services/organs.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-organs',
  templateUrl: './organs.component.html',
  styleUrls: ['./organs.component.scss']
})
export class OrgansComponent implements OnInit  {
  organCreatedStatus:string = 'No Organ is created!'
  isOrganCreated:boolean = false
  organs: { name: string, status: string }[] = []
  organ:string = 'kjdhsdkfkl'
  isAvailable: boolean = true
  value:number = 10

  constructor(private OrgansService: OrgansService, private router: Router) {
  }

  ngOnInit() {
    this.organs = this.OrgansService.organs
  }

  onOrganAdded(event: {name: string, status: string}) {
    this.isOrganCreated = true
    this.OrgansService.addOrgan(event.name, event.status)
    console.log(this.OrgansService)
  }

  onOrganChanged() {
    this.organ = '13124523453464587568'
  }

  onAboutLinkClick() {
    this.router.navigateByUrl('/about')
  }
}
