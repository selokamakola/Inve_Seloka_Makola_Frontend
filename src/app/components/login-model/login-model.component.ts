import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-model',
  templateUrl: './login-model.component.html',
  styleUrls: ['./login-model.component.scss']
})
export class LoginModelComponent implements OnInit {
  password: string;
  username: string;
  errLogIn: boolean;

  constructor(private router: Router) {
    this.errLogIn = false;
  }

  ngOnInit(): void {
  }

  login() {
    if (!this.validateUser(this.username, this.password)) {
      this.errLogIn = true;
      return;
    }
    this.errLogIn = false;
    this.router.navigate(['reports']);
  }

  validateUser(username: string, password: string): boolean {
    if (username != "admin" && password != "admin") {
      return false;
    }
    return true;
  }

}
