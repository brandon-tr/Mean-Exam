import { Component, OnInit } from '@angular/core';
import { PollService } from '../models/poll.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  poll;
  constructor(private _pollService: PollService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this._pollService.DisplayPoll(params['id']).then((data) =>
        this.poll = data
      );
    });
  }

    Vote(id, name) {
      this._pollService.Vote(id, name).then((data) => this.poll = data);
      this._pollService.DisplayPoll(id).then((data) => this.poll = data);
  }

}
