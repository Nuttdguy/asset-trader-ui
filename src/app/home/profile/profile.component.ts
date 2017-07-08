import { SettingsService, AlertService } from '../../_services';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  @Input() isProfileActive: boolean;
  firsName: string;
  lastName: string;
  userName: string;  
  
  constructor(private settingsService: SettingsService,
            private alertService: AlertService) { }

  ngOnInit() {
    this.isProfileActive = false;
    this.firsName = null;
    this.lastName = null;
    this.userName = null;  
  }
  
  onUpdateProfile(firstName, lastName, userName) {
    this.settingsService
      .onUpdateProfile(firstName, lastName, userName)
      .subscribe( data => { 
        this.alertService.success(data.message);
        setTimeout( () => { this.alertService.clearMessage() }, 3000 );
      }, 
      error => { 
        console.log('THIS IS ERROR FROM PROFILE COMPONENT')
        console.log(error)
      })
  }
  
  onDeleteProfile() {
    
  }

}
