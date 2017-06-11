import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  signupForm: FormGroup;
  
  constructor(form: FormBuilder) { 
    
    // Construct the form model, refactor and create model
    this.signupForm = form.group({
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.compose([Validators.minLength(2), Validators.required])],
      'email' : [null, Validators.compose([Validators.email, Validators.required])],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(8)])]    
    });
  
  }

  ngOnInit() {
  }
  
  onSubmitForm(value: any):void {
    console.log('Form data');
    console.log(value);
  }

}
