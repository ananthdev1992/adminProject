import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-sms-settings',
  templateUrl: './sms-settings.component.html',
  styleUrls: ['./sms-settings.component.scss']
})
export class SmsSettingsComponent implements OnInit {

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
