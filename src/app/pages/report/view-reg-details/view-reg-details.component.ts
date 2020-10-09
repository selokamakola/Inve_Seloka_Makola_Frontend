import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-reg-details',
  templateUrl: './view-reg-details.component.html',
  styleUrls: ['./view-reg-details.component.scss']
})
export class ViewRegDetailsComponent implements OnInit {
  userDetails: any;
  constructor(private activateRoute: ActivatedRoute, private router: Router) {
    if (!this.activateRoute.snapshot.queryParamMap.has('details')) {
      this.router.navigate(['reports']);
      return;
    }
    if (this.activateRoute.snapshot.queryParamMap.get('details') == '') {
      this.router.navigate(['reports']);
      return;
    }

  
  }

  ngOnInit(): void {
      try {
      this.userDetails = JSON.parse(this.activateRoute.snapshot.queryParamMap.get('details'));
    } catch (error) {
      this.router.navigate(['reports']);
      return;
    }  
    console.log(this.userDetails)
  }

  back():void{
    this.router.navigate(['reports'])
  }


}

