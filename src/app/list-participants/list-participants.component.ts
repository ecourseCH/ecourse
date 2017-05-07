import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-participants',
  templateUrl: './list-participants.component.html',
  styleUrls: ['./list-participants.component.css']
})
export class ListParticipantsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  participants=  [
    "Luxus", "Mammut", "Gallo", "Snoopy", "Prusik"
  ];

}
