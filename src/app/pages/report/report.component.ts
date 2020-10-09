import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiGatewayService } from 'src/app/services/api-gateway.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  registrations: Array<any>;
  selectedUser: any;
  constructor(private router: Router, private _api: ApiGatewayService) { }

  ngOnInit(): void {

    this._api.getUsers().subscribe(res => {
      this.registrations = res;
    })
  }

  viewDetails(report: any) {
    this.selectedUser = report;
    this.router.navigate(['report-details'], {
      queryParams: {
        details: JSON.stringify(report)
      }
    });
  }

  back():void{
    this.router.navigate(['/']);
  }

}
