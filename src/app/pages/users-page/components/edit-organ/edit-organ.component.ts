import { Component, Input } from '@angular/core';
import { OrgansService } from "../../../../services/organs.service";
import { Organ } from "../../../../types/organ";
import { IDeactivatedGuard } from "../../../../services/guards/deactivate.guard";

@Component({
  selector: 'app-edit-organ',
  templateUrl: './edit-organ.component.html',
  styleUrls: ['./edit-organ.component.scss']
})
export class EditOrganComponent implements IDeactivatedGuard {
  @Input() organ: Organ | undefined

  constructor(private organs: OrgansService) {
  }

  canExit() {
    return confirm('Are you sure ypu want to exit');
  }
}
