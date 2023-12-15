// Group Members
// Chamundeshwari Kaparthi - G01382007
// Sriya Gade - G01386062
// This is where the all the API calls are defined and invoked from here 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = 'http://localhost:8081/api/v1.0';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  
  constructor(private http: HttpClient) {}

  submitSurvey(formData: FormData,endPoint: String): Observable<any> {
    return this.http.post(this.apiUrl + endPoint, formData,this.httpOptions);
  }

  fetchSurveys(endPoint: String): Observable<any> {
    return this.http.get(this.apiUrl + endPoint,this.httpOptions);
  }

}
