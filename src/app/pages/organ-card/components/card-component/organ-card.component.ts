import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-organ-card',
  templateUrl: './organ-card.component.html',
  styleUrls: ['./organ-card.component.scss']
})
export class OrganCardComponent implements OnInit {
  organ!: { id: string, name: string }

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.organ = {
        id: data['id'],
        name: data['name']
      }
    })
  }

  getOrganDetails() {
    this.router.navigate(['/organs', 13, 'Ass'],
      {queryParams: {page: 1, search: 'Head'}})
  }
}
