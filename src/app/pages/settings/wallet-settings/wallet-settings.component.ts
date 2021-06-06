import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-wallet-settings',
  templateUrl: './wallet-settings.component.html',
  styleUrls: ['./wallet-settings.component.scss']
})
export class WalletSettingsComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }
  
  Update(){
    this.router.navigateByUrl('/pages/dashboard');
  }

  Cancel(){
    this.router.navigateByUrl('/pages/dashboard');
  }
}
