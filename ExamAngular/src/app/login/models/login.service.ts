import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private _http: Http, private _router: Router) { }

  Register(user) {
    this._http.post('/register', user).map(data => data.json()).toPromise();
    localStorage.setItem('name', JSON.stringify(user));
    this._router.navigateByUrl('/dashboard');
  }
}
