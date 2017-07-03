import { AlertService, AuthenticationService } from '../_services/index';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService  ) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  
  login() {
    this.loading = true;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.set('Access-Control-Allow-Origin', '*');
    
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe( data => { 
        
        console.log(this.returnUrl + ' THIS THE RETURN URL');
        this.router.navigate([this.returnUrl]);
        this.loading = false;
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }

}
