import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiGatewayService } from 'src/app/services/api-gateway.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
user={
  name:null,
  surname:null,
  idNum:null,
  email:null
}
  constructor(private router:Router,private _api:ApiGatewayService) { }

  ngOnInit(): void {
  }
  register(): void { 
    if(this.user.name == null || this.user.surname == null || this.user.idNum == null ||  this.user.email == null  ){
      alert("Please fill in all the details");
      return;
    }
    this._api.registerUser(this.user).subscribe(res=>{
      if(res.status){
        alert(res.message); 
        this.router.navigate(['home'])  
      }
      else{
        alert(res.message);
        return;
      }
    }) 
  }

  cancel(){
    this.router.navigate(['/']);
  }

}
