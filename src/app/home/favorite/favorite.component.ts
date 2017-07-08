import { ResultWrapper } from '../../_models';
import { SettingsService, AlertService } from '../../_services';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input() isFavoriteActive: boolean;
  favCoinList: ResultWrapper;
  
  constructor(
    private settingsService: SettingsService,
    private router: Router,
    private alertService: AlertService ) { }

  ngOnInit() {
    this.isFavoriteActive = false;
    this.onGetFavoriteCoins();
  }
  
  
  onGetFavoriteCoins() {
    this.settingsService
      .onGetFavoriteCoin()
      .subscribe( data => { 
        this.favCoinList = data;
        console.log(this.favCoinList);
      }, 
      error => {
        console.log('THIS IS FROM FAVORITE COMPONENT');
        console.log(error);
      })
  }
  
  
  onDeleteFavoriteCoin(tokId) {
    this.settingsService
      .onDeleteFavoriteCoin(tokId)
      .subscribe( data => { 
        this.alertService.success(data.message);
        setTimeout( () => {this.alertService.clearMessage() }, 3000 );
      }, 
      error => {
        console.log('THIS IS ERROR FROM FAVORITE COMPONENT');
        console.log(error);
      })
    setTimeout( () => { this.reloadView() }, 3000 );
  }
  
  private reloadView() {
    this.onGetFavoriteCoins();
  }

}
