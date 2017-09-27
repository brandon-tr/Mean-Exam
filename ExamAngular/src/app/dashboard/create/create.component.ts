import { Component, OnInit } from '@angular/core';
import { Poll } from '../models/poll';
import { PollService } from '../models/poll.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  poll = new Poll();
  name = JSON.parse(localStorage.getItem('name'));
  constructor(private _pollService: PollService) { }

  ngOnInit() {
  }

  CreatePoll() {
    this.poll.creator = this.name.name;
    this._pollService.CreatePoll(this.poll);
    this.poll = new Poll();
  }

}
