// Group Members
// Chamundeshwari Kaparthi - G01382007
// Sriya Gade - G01386062

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfSurveysComponent } from './list-of-surveys.component';

describe('ListOfSurveysComponent', () => {
  let component: ListOfSurveysComponent;
  let fixture: ComponentFixture<ListOfSurveysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfSurveysComponent]
    });
    fixture = TestBed.createComponent(ListOfSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
