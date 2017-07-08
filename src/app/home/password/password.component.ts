import { SettingsService, AlertService } from '../../_services';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  @Input() isPasswordActive: boolean;
  passwordObj = {
    'currentPassword': '',
    'newPassword': ''
  }

  constructor(
    private settingsService: SettingsService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.isPasswordActive = true;
  }

  onChangePassword(currentPassword, newPassword) {
    this.passwordObj['currentPassword'] = currentPassword;
    this.passwordObj['newPassword'] = newPassword;
    
    this.settingsService
      .onChangePassword(this.passwordObj)
      .subscribe( data => { 
        this.alertService.success(data.message);
        setTimeout( () => { this.alertService.clearMessage() }, 3000 );
        console.log('THIS IS SUCCESS FROM PASSWORD COMPONENT')
      },
      error => {
        console.log('THIS IS ERROR FROM PASSWORD COMPONENT');
        console.log(error); 
      })
  }
  
}
