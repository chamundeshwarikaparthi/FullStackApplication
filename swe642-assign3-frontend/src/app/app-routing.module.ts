// Group Members
// Chamundeshwari Kaparthi - G01382007
// Sriya Gade - G01386062
// This is where the routing is implemented and all the routes are declared
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { ListOfSurveysComponent } from './list-of-surveys/list-of-surveys.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'survey', component: SurveyPageComponent },
  { path: 'surveysList', component: ListOfSurveysComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
