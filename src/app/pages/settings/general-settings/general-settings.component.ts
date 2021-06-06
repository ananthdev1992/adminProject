import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss']
})
export class GeneralSettingsComponent implements OnInit {

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
