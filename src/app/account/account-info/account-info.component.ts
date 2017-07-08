import { ResultWrapper, BTCWrapper } from '../../_models';
import { MarketInfoService, AccountDataService, AlertService } from '../../_services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  // TODO -- GET THIS DATA FROM SERVICE
  public doughnutChartLabels: string[] = ['Bitcoin', 'Waves', 'Golem'];
  public doughnutChartData: number[] = [350, 450, 200];
  public doughnutChartType = 'doughnut';
  bitcoinPrice: BTCWrapper;
  currentBTCPrice = 0.00;
  denomination: string;
  currentPortfolioValue = 0.00;
  
  
  constructor(
    private marketInfoService: MarketInfoService,
    private accountDataService: AccountDataService,
    private alertService: AlertService) { 
  }

  ngOnInit() { 
    this.onGetCurrentBitcoinPrice();
  }

  public chartClicked(e: any): void {
    console.log(e);
  }
  
  public chartHovered(e: any): void {
    console.log(e);
  }
  
  onGetCurrentBitcoinPrice() {
    this.marketInfoService
        .onGetCurrentBitcoinPrice()
        .subscribe( data => { 
           this.bitcoinPrice = data;
           this.currentBTCPrice = this.bitcoinPrice.data['amount'];
           this.denomination = this.bitcoinPrice.data['currency'];
           this.onGetCurrentPortfolioValue(this.bitcoinPrice.data['amount'])
        },
        error => {
          console.log('THIS IS ERROR FROM ACCOUNT-INFO COMPONENT');
          console.log(error);
      })

  }
  
  onGetCurrentPortfolioValue(btc) {
    this.accountDataService
      .onGetPortfolioValue(btc)
      .subscribe( data => { 
        this.currentPortfolioValue = data.result['portfolioValue'];
        console.log('THIS IS FROM ACCOUNT-INFO GET CURRENT PORTFOLIO');
      }, 
      error => {
        console.log('THIS IS ERROR FROM ACCOUNT-INFO CURRENT PORTFOLIO');
        console.log(error);
      })
  }
}





