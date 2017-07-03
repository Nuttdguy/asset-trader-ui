
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
  usersArr: Users[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    this.loadAllUsers(); // TODO - CHANGE THIS CALL TO ANOTHER 
  }
  
  deleteUser(id: number) {
    this.userService.delete(id).subscribe( () => { this.loadAllUsers() });
  }
  
  // TODO -- REMOVE THIS METHOD 
  private loadAllUsers() {
    this.userService.getAll().subscribe( users => { 
      this.usersArr = users; 
    },
    error => {
      console.log(error);
    })
  }
  
}
