// Group Members
// Chamundeshwari Kaparthi - G01382007
// Sriya Gade - G01386062
// This is the survey form component and form validations are done here
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.css']
})
export class SurveyPageComponent {
  surveyForm: FormGroup;

  constructor(private apiServiceService: ApiServiceService,private fb: FormBuilder) {

    this.surveyForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      streetaddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateofsurvey: ['', Validators.required],
      likedmostoptions: this.fb.array([]),
      likedmost: [''],
      interestedby: [''],
      likelihood: [''],
      comments: [''],
    });
  }
  public likedmostoptions: Array<any> = [
    { id: "likedstudents", value: 'Students' },
    { id: "likedlocation", value: 'Location' },
    { id: "likedcampus", value: 'Campus' },
    { id: "likedatmosphere", value: 'Atmosphere' },
    { id: "likeddormRooms", value: 'Dorm Rooms' },
    { id: "likedsports", value: 'Sports' },
  ];
  onCheckChange(event: any) {
    const formArray: FormArray = this.surveyForm.get('likedmostoptions') as FormArray;

    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.target.value));
    }
    /* unselected */
    else {
      // find the unselected element
      let i: number = 0;
      for (let i = 0; i < formArray.length; i++) {
        const ctrl = formArray.at(i) as FormControl; // Cast to FormControl

        if (ctrl.value == event.target.value) {
          // Remove the unselected element from the formArray
          formArray.removeAt(i);
          return;
        }
      }

    }
  }

  onSubmit(): void {
    console.log("Submit method is invoked")
    if (this.surveyForm.valid) {
      console.log("The form is valid")
      const likedMostString = this.surveyForm.value.likedmostoptions.join(', ');
      const modifiedFormValue = {
        ...this.surveyForm.value,
        likedmost: likedMostString,
      };
      this.apiServiceService.submitSurvey(modifiedFormValue, "/createRecord").subscribe(
        (response) => {

          alert(response.message);

          this.surveyForm.reset();
          this.surveyForm.reset({ likedmost: '' });

          const formElement = document.getElementById('myForm') as HTMLFormElement;
          formElement.reset();
  
        },
        (error) => {
          alert(error.error.message);
        }
      );
    }
    else{
      console.log("Invalid form")
      this.surveyForm.markAllAsTouched();
    }
  }
}
