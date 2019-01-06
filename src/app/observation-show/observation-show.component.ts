import { Component, OnInit, Input} from '@angular/core';

import { Router } from '@angular/router';

import { Observation } from '../model/observation'

import { ObservationService } from '../observation.service';

import { Participant } from '../model/participant'

import { ParticipantService } from '../participant.service';

import { Leader } from '../model/leader'

import { LeaderService } from '../leader.service';

import { Activity } from '../model/activity'

import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-observation-show',
  templateUrl: './observation-show.component.html',
  styleUrls: ['./observation-show.component.css']
})
export class ObservationShowComponent implements OnInit {

 observations: Observation[];
 
 restrictedObservation: Observation = new Observation;
 
 showObservations: Observation[];
 
private _activityId: number;
 private _participantId: number; 

   participants: Participant[] ;
  selectedParticipant: Participant = new Participant;
  leaders: Leader[] ;
  selectedLeader: Leader = new Leader;
  activitys: Activity[] ;
  selectedActivity: Activity = new Activity;


 @Input() set activityId(id: number) {
 this._activityId = id;
 this.getSomeObservations();
 }
 ;


 @Input() set participantId(id: number) {
 this._participantId = id;
 this.getSomeObservations();
 }
 ;
 
  constructor(private router: Router
    ,private observationService: ObservationService
    ,private leaderService: LeaderService
    ,private activityService: ActivityService
    ,private participantService: ParticipantService) { }

  ngOnInit() {
 /* this.getSomeObservations();
  this.showObservations = this.observations;*/
    this.getParticipants();
  this.getLeaders();
  this.getActivitys();
  }
  
  getParticipants(): void {

  this.participantService.getParticipants()
  .subscribe(participants => this.participants = participants);
}
getLeaders(): void {

  this.leaderService.getLeaders()
  .subscribe(leaders => this.leaders = leaders);
}
getActivitys(): void {

  this.activityService.getActivitys()
  .subscribe(activitys => this.activitys = activitys);
}

  getObservations(): void {
  this.observationService.getObservations()
  .subscribe(observations => this.observations = observations);
  }
  

setSelectedActivity(id: number): void{
for (var i=0; i<this.activitys.length; i++){
  if(this.activitys[i].activityId == id){
    // set activity
    this.selectedActivity = this.activitys[i];
  } 
 if (this.selectedActivity.activityId == id){
 // success 
} else {
 // TODO error case
}
}
}

setSelectedLeader(id: number): void{
for (var i=0; i<this.leaders.length; i++){
  if(this.leaders[i].leaderId == id){
    // set leader
    this.selectedLeader = this.leaders[i];
  } 
 if (this.selectedLeader.leaderId == id){
 // success 
} else {
 // TODO error case
}
}

}


setSelectedParticipant(id: number): void{
for (var i=0; i<this.participants.length; i++){
  if(this.participants[i].participantId == id){
    // set participant
    this.selectedParticipant = this.participants[i];
  } 
 if (this.selectedParticipant.participantId == id){
 // success 
} else {
 // TODO error case
}
}

}

getActivityString(id: number): string{

this.setSelectedActivity(id);
   const activityString = "".concat(this.selectedActivity.activityId.toString()).concat(" - ").concat(this.selectedActivity.activityName);

  return activityString;
}

getLeaderString(id: number): string{

this.setSelectedLeader(id);
   const leaderString = "".concat(this.selectedLeader.leaderScoutname);

  return leaderString;
}

getParticipantString(id: number): string{

this.setSelectedParticipant(id);
   const participantString = "".concat(this.selectedParticipant.participantScoutname);

  return participantString;
}

    getSomeObservations(): void {
    this.restrictedObservation.activityId = this._activityId;
    this.restrictedObservation.participantId = this._participantId;
   console.log(this); 
  this.observationService.getSomeObservations(this.restrictedObservation)
  .subscribe(showObservations => this.showObservations = showObservations);
  }
  goToObservation( id: number){
   this.router.navigate(["/observation/".concat(id.toString())]);
 }
 
}
