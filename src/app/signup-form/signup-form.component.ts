import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
      'firstName' : '',
      'lastName' : '',
      'email' : '',
      'password' : ''    
    });
  
  }

  ngOnInit() {
  }
  
  onSubmitForm(value: any):void {
    console.log('Form data');
    console.log(value);
  }

}
