import { ResultWrapper } from '../../_models/result-wrapper.model';
import { AccountDataService } from '../../_services/account-data.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-account-data',
  templateUrl: './account-data.component.html',
  styleUrls: ['./account-data.component.css']
})
  

export class AccountDataComponent implements OnInit {

  accountDataBalance: ResultWrapper;
  accountDataOrderHistory: ResultWrapper;
  accountDataWithdrawalHistory: ResultWrapper;
  accountDataDepositHistory: ResultWrapper;
  
  showOrders=false;
  showBalances=false;
  showWithdrawalHistory=false;
  showDepositHistory=false;
  
  constructor(private accountDataService: AccountDataService) { }

  ngOnInit() {
    this.accountDataBalance = null;
    this.accountDataOrderHistory = null;
    this.accountDataWithdrawalHistory = null;
    this.accountDataDepositHistory = null;
  }
  
  onGetAccountBalance() {
    this.showBalances = true;
    this.showOrders = false;
    this.showWithdrawalHistory=false;
    this.showDepositHistory=false;
    
    this.accountDataService
        .onGetAccountBalances()
        .subscribe( data => {
          this.accountDataBalance = data;
          console.log('This is account balance');
        },
        error => {
          console.log('This is an error from account balances');
        });
  }
  
  onGetAccountDataOrderHistory() {
    this.showBalances = false;
    this.showOrders = true;
    this.showWithdrawalHistory=false;
    this.showDepositHistory=false;
    
    this.accountDataService
        .onGetAccountOrderHistory()
        .subscribe( data => { 
          this.accountDataOrderHistory = data;
          console.log('This is Order History')
        },
        error => {
          console.log('This is an error from Order History')
        });
  }  
  
  onGetWithdrawalHistory() {
    this.showBalances = false;
    this.showOrders = false;
    this.showWithdrawalHistory=true;
    this.showDepositHistory=false;
    
    this.accountDataService
      .onGetWithdrawalHistory()
      .subscribe( data => { 
        this.accountDataWithdrawalHistory = data;
        console.log('This is Withdrawal History')
      },
      error => {
        console.log('This is an error from Withdrawal History')
    });
  }
  
  onGetDepositHistory() {
    this.showBalances = false;
    this.showOrders = false;
    this.showWithdrawalHistory=false;
    this.showDepositHistory=true;
    
    this.accountDataService
      .onGetDepositHistory()
      .subscribe( data => { 
        this.accountDataDepositHistory = data;
        console.log('This is Deposit History')
      },
      error => {
        console.log('This is an error from Deposit History')
    });
  }
  
  
}
