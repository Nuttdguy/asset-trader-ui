import { ResultWrapper, BTCWrapper } from '../../_models';
import { MarketInfoService } from '../../_services';
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
  
  
  constructor(private marketInfoService: MarketInfoService) { 
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
          
          console.log('This is bitcoin price');
          console.log(data);
        },
        error => {
          console.log(error);
        })
  }
  
}





