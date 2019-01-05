import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Participant } from '../model/participant'

import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-participant-detail',
  templateUrl: './participant-detail.component.html',
  styleUrls: ['./participant-detail.component.css']
})
export class ParticipantDetailComponent implements OnInit {

@Input() participant: Participant = new Participant;

constructor( private route: ActivatedRoute,
private participantService: ParticipantService,
  private location: Location
) { }

  ngOnInit() {
  this.getParticipant();
  }
  

  
getParticipant(): void {
 const id = +this.route.snapshot.paramMap.get('id');
  this.participantService.getParticipant(id)
  .subscribe(participant => this.participant = participant);
}

}
