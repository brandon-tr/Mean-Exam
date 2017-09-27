import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { LoginService } from './models/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  constructor(private register: LoginService, private _router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('name') !== null) {
      this._router.navigateByUrl('/dashboard');
    }
  }

  Register() {
    this.register.Register(this.user);
    this.user = new User();
  }

}
