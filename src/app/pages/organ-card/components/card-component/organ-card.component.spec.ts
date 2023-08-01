import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganCardComponent } from './organ-card.component';

describe('OrganCardComponent', () => {
  let component: OrganCardComponent;
  let fixture: ComponentFixture<OrganCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganCardComponent]
    });
    fixture = TestBed.createComponent(OrganCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
