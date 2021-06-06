import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-email-settings',
  templateUrl: './email-settings.component.html',
  styleUrls: ['./email-settings.component.scss']
})
export class EmailSettingsComponent implements OnInit {

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
