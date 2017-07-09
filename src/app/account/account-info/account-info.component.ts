import {ResultWrapper, BTCWrapper} from '../../_models';
import {MarketInfoService, AccountDataService, AlertService} from '../../_services';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  // TODO -- GET THIS DATA FROM SERVICE
  // FOR DOUGHNUT CHARTS
  public doughnutChartLabels: string[] = ['Bitcoin', 'Waves', 'Golem'];
  public doughnutChartData: number[] = [350, 450, 200];
  public doughnutChartType = 'doughnut';


  // FOR BAR-CHARTS  
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['04-17', '05-17', '06-17', '07-17'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [65, 59, 80, 81], label: 'USD ($)'},
  ];

  // FOR DATA

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

  public barClicked(e: any): void {
    console.log(e);
  }

  public barHovered(e: any): void {
    console.log(e);
  }

  onGetCurrentBitcoinPrice() {
    this.marketInfoService
      .onGetCurrentBitcoinPrice()
      .subscribe(data => {
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
      .subscribe(data => {
        this.currentPortfolioValue = data.result['portfolioValue'];
      },
      error => {
        console.log('THIS IS ERROR FROM ACCOUNT-INFO CURRENT PORTFOLIO');
        console.log(error);
      })
  }

  showAvgReturn() {
    this.accountDataService
      .onShowAvgReturn(this.currentBTCPrice)
      .subscribe(data => {
        this.alertService.success(data.message);
        setTimeout( () => { this.alertService.clearMessage() }, 3000 );
        console.log(data);
      }, 
      error => {
        console.log('THIS IS ERROR FROM ACCOUNT-INFO SHOW RETURN');
        console.log(error);
      })
  }
}





