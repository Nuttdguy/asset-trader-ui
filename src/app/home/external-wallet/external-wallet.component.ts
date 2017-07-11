import { ResultWrapper } from '../../_models';
import { MarketInfoService, AlertService, SettingsService } from '../../_services';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-external-wallet',
  templateUrl: './external-wallet.component.html',
  styleUrls: ['./external-wallet.component.css']
})
  
export class ExternalWalletComponent implements OnInit {

  @Input() isExternalWalletActive: boolean;
  resultWrapper: ResultWrapper;
  
  constructor(private marketInfoService: MarketInfoService,
    private settingsService: SettingsService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.isExternalWalletActive = false;
  }
  
  addCoinToPortfolio(tokenName, tokenBalance, tokenDepositAddress, tokenWithdrawalAddress) {
    console.log(tokenName + tokenBalance);
    let walletDetail = {
      'coinName': tokenName,
      'coinBalance': tokenBalance,
      'coinDepositAddress': tokenDepositAddress,
      'coinWithdrawalAddress': tokenWithdrawalAddress
    };
    
    this.settingsService
      .onAddExternalWallet(walletDetail)
      .subscribe( data => { 
        this.resultWrapper = data;
        this.alertService.success(data.message);
        setTimeout( () => { this.alertService.clearMessage() }, 3000);
      }, 
      error => {
        console.log('THIS IS ERROR FROM EXTERNAL-WALLET COMPONENT');
      })
      setTimeout( () => { this.reloadView() }, 3000 );
  }
  
  viewCoinFromExternalWallets() {
    this.settingsService
      .onViewCoinFromExternalWallet()
      .subscribe( data => { 
        this.resultWrapper = data;
      }, 
      error => { 
        console.log('THIS IS ERROR FROM EXTERNAL-WALLET COMPONENT')
      })
    
  }  
  
  // PRIVATE METHODS
  
  
  private reloadView() {
    this.viewCoinFromExternalWallets();
  }
  
  
  private loadDropDownBox() {
    this.marketInfoService
      .onGetCoinMarketInfo()
      .subscribe( data => {  
        this.resultWrapper = data;
      },
      error => {
        console.log('This is error from external-wallet component');
      })
  }
  
}
