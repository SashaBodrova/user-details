import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganComponent } from './organ.component';

describe('OrganComponent', () => {
  let component: OrganComponent;
  let fixture: ComponentFixture<OrganComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganComponent]
    });
    fixture = TestBed.createComponent(OrganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
