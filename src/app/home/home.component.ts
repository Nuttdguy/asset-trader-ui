
import { Users } from '../_models/users.model';
import { UserService } from '../_services/index';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  
export class HomeComponent implements OnInit {
  currentUser: Users;
  isApiExchangeLinkActive: boolean;
  isProfileActive: boolean;
  isNetworkActive: boolean;
  isPasswordActive: boolean;
  isFavoriteActive: boolean;

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    
  }
  
  showProfile() {
    this.isApiExchangeLinkActive = false;
    this.isProfileActive = true ;
    this.isNetworkActive = false;
    this.isPasswordActive = false;
    this.isFavoriteActive = false;
  }
  
  showApiExchange() {
    this.isApiExchangeLinkActive = true;
    this.isProfileActive = false ;
    this.isNetworkActive = false;
    this.isPasswordActive = false;
    this.isFavoriteActive = false;
  }
  
  showNetwork() {
    this.isApiExchangeLinkActive = false;
    this.isProfileActive = false ;
    this.isNetworkActive = true;
    this.isPasswordActive = false;
    this.isFavoriteActive = false;
  }
  
  showPassword() {
    this.isApiExchangeLinkActive = false;
    this.isProfileActive = false ;
    this.isNetworkActive = false;
    this.isPasswordActive = true;
    this.isFavoriteActive = false;
  }
  
  showFavorite() {
    this.isApiExchangeLinkActive = false;
    this.isProfileActive = false ;
    this.isNetworkActive = false;
    this.isPasswordActive = false;
    this.isFavoriteActive = true;
  }
  
}
