import { ResultWrapper } from '../../_models';
import { SettingsService, AlertService } from '../../_services';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
  
export class NetworkComponent implements OnInit {
  @Input() isNetworkActive: boolean;
  friendList: ResultWrapper;
  showFriend = false;
  
  constructor(
    private settingsService: SettingsService,
    private alertService: AlertService) { 
  }

  ngOnInit() {
    this.isNetworkActive = false;
  }

  onAddFriendToNetwork(email, message, firstName, lastName ) {
    let friendDetail = { 
      'email': email,
      'message': message,
      'firstName': firstName,
      'lastName': lastName };
    
    this.settingsService
      .onAddFriendToNetwork(friendDetail)
      .subscribe( data => { 
        this.alertService.success(data.message);
        setTimeout( () => { this.alertService.clearMessage() }, 3000 );
      }, 
      error => {
        console.log('THIS IS ERROR FROM NETWORK COMPONENT');
        console.log(error);
      })
  }
  
  onShowFriendList() {
    this.settingsService
      .onViewFriendList()
      .subscribe( data => { 
        this.friendList = data;
        console.log('THIS IS DATA FROM NETWROK COMPONENT');
        console.log(data);
      }, 
      error => {
        console.log('THIS IS ERROR FROM NETWORK COMPONENT');
        console.log(error);
      })
  }
  
  onDeleteFriend(friendId) {
    this.settingsService
      .onDeleteFriend(friendId)
      .subscribe( data => {  
        this.alertService.success(data.message);
        setTimeout( () => { this.alertService.clearMessage() }, 3000 );
      }, 
      error => { 
        console.log('THIS IS AN ERROR FROM DELETE FRIEND');
        console.log(error);
      })
  }
  
}
