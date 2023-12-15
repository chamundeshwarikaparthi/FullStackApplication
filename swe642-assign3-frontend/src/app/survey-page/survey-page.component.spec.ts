// Group Members
// Chamundeshwari Kaparthi - G01382007
// Sriya Gade - G01386062
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyPageComponent } from './survey-page.component';

describe('SurveyPageComponent', () => {
  let component: SurveyPageComponent;
  let fixture: ComponentFixture<SurveyPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyPageComponent]
    });
    fixture = TestBed.createComponent(SurveyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
