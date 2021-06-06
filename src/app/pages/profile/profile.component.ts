import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  method = "";
  constructor(private router: Router,
    private route: ActivatedRoute,) { 
      
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.method = params.update;
      }
    );
  }
  Update(){
      this.router.navigateByUrl('/pages/dashboard');
  }
  Change(){
    this.router.navigateByUrl('/pages/dashboard');
  }
  Cancel(){
    this.router.navigateByUrl('/pages/dashboard');
  }
}
