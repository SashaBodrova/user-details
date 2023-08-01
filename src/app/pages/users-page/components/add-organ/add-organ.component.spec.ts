import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrganComponent } from './add-organ.component';

describe('AddOrganComponent', () => {
  let component: AddOrganComponent;
  let fixture: ComponentFixture<AddOrganComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOrganComponent]
    });
    fixture = TestBed.createComponent(AddOrganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
