import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http, Response, Request, RequestMethod } from '@angular/http';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})


export class LoginFormComponent implements OnInit {

  @Output() showLogin = false;
  @Output() register = false;
  
  username: string;
  loginForm: FormGroup;
  authenticated: boolean;
  profile: Object;


  constructor(form: FormBuilder, public http: Http) {

    this.loginForm = form.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    });

  }

  ngOnInit() {
  }

  onSubmitForm(form: FormGroup) {
    
    // TODO connect to back-end service, authenticate and return
    this.username = this.loginForm.controls['username'].value;
    console.log(this.username);
    this.showLogin = false;
    this.register = false;
    this.authenticated = true;
  }

  
}











