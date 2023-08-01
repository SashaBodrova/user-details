import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrganComponent } from './edit-organ.component';

describe('EditOrganComponent', () => {
  let component: EditOrganComponent;
  let fixture: ComponentFixture<EditOrganComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditOrganComponent]
    });
    fixture = TestBed.createComponent(EditOrganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
