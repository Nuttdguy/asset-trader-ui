import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-email-option',
  templateUrl: './email-option.component.html',
  styleUrls: ['./email-option.component.css']
})
export class EmailOptionComponent implements OnInit {

  @Input() isEmailOptionActive: boolean;
  
  constructor() { }

  ngOnInit() {
    this.isEmailOptionActive = false;
  }

  onAddSendEmail() {

  }
  
  onViewSendEmails() {
    
  }
}
