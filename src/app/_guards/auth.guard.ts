import { AlertService } from '../_services';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';



@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router, private alertService: AlertService) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('currentUser')) {
      setTimeout( () => { this.alertService.clearMessage() }, 3000 );
      return true;
    }
    
    this.alertService.error('INVALID USERNAME AND/OR PASSWORD');
    this.router.navigate( ['/login'], { queryParams: { returnUrl: state.url }});
    return false;    
  }
  
}
