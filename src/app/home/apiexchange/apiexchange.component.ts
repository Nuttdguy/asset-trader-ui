import { Api } from '../../_models';
import { SettingsService, AlertService } from '../../_services';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apiexchange',
  templateUrl: './apiexchange.component.html',
  styleUrls: ['./apiexchange.component.css']
})
export class ApiexchangeComponent implements OnInit {
  
  exchangeName: string;
  apiKey: string;
  secretKey: string;
  @Input() isApiExchangeLinkActive: boolean;
  
  constructor(
    private settingsService: SettingsService,
    private alertService: AlertService,
    private router: Router ) {
   }

  ngOnInit() {
    this.isApiExchangeLinkActive = false;
  }

  onSaveApiKey(exchangeName) {
    
    let user = localStorage.getItem('currentUser'); // GETS THE STRING VALUE OF KEY
    let keyObject = JSON.parse(user); // CONVERTS INTO A JSON OBJECT
 
    keyObject['apiKey'] = this.apiKey;
    keyObject['secretKey'] = this.secretKey;
    keyObject['exchangeName'] = exchangeName;
    
    console.log(keyObject);
    
    this.settingsService
      .onSaveApiKeyService(keyObject)
      .subscribe( data => { 
        this.alertService.success('API Keys were saved successfully', true);
        setTimeout( () => { this.alertService.clearMessage() }, 3000);
        this.router.navigate( [''] );
      }, 
      error => {
        this.alertService.error(error);
      })
  }
  
}
