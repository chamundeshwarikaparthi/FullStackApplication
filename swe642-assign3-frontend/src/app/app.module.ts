// Group Members
// Chamundeshwari Kaparthi - G01382007
// Sriya Gade - G01386062

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListOfSurveysComponent } from './list-of-surveys/list-of-surveys.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SurveyPageComponent,
    ListOfSurveysComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
