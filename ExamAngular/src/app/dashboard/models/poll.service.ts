import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class PollService {

  constructor(private _http: Http, private _router: Router) { }

  CreatePoll(poll) {
    this._http.post('/createPoll', poll).map(data => data.json()).toPromise();
    this._router.navigateByUrl('/dashboard');
  }
  DisplayAll(callback) {
    this._http.get(`/polls`).subscribe(
      (data) => {callback (data.json()); },
      (err) => {console.log('There has been an error', err); }
    );
  }
  DisplayPoll(id) {
    id = {id: id};
   return this._http.post('/poll', id).map(data => data.json()).toPromise();
  }
  Vote(id, name) {
    id = {id: id, name: name};
    return this._http.post('/vote', id).map(data => data.json()).toPromise();
  }
  Delete(id) {
    id = {id: id};
    this._http.post('/delete', id).map(data => data.json()).toPromise();
  }
}
