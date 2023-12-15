// Group Members
// Chamundeshwari Kaparthi - G01382007
// Sriya Gade - G01386062
// This is the survey list component
import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-list-of-surveys',
  templateUrl: './list-of-surveys.component.html',
  styleUrls: ['./list-of-surveys.component.css']
})
export class ListOfSurveysComponent {
  surveysList: any[] = [];

  constructor(private apiServiceService: ApiServiceService) {}

  ngOnInit(): void {
    this.loadSurveys();
  }

  loadSurveys() {
    // Fetch surveys from the server
    this.apiServiceService.fetchSurveys('/fetchAllSurveys').subscribe(
      (data: any[]) => {
        this.surveysList = data;
      },
      (error) => {
        console.error('Error fetching surveys', error);
      }
    );
  }

}
