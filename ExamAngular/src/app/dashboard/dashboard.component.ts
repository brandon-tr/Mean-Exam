import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PollService } from './models/poll.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pollList;
  search = '';
  name = JSON.parse(localStorage.getItem('name'));
  constructor(private _router: Router, private _pollService: PollService) { }

  ngOnInit() {
    if (localStorage.getItem('name') === null) {
      this._router.navigateByUrl('');
    }
    this._pollService.DisplayAll(function(data) {
      this.pollList = data;
    }.bind(this));
  }

  Logout() {
    localStorage.removeItem('name');
  }

  Delete(id) {
    this._pollService.Delete(id);
  }

  ViewPoll(id) {
    this._router.navigateByUrl(`/poll/${id}`);
  }

}
