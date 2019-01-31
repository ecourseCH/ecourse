import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {NgForm } from '@angular/forms';

import { Observation } from '../model/observation'

import { ObservationService } from '../observation.service';

import { Observable, of } from 'rxjs';

import { Participant } from '../model/participant'

import { ParticipantService } from '../participant.service';

import { Leader } from '../model/leader'

import { LeaderService } from '../leader.service';

import { Activity } from '../model/activity'

import { ActivityService } from '../activity.service';


@Component({
  selector: 'app-modify-observation',
  templateUrl: './modify-observation.component.html',
  styleUrls: ['./modify-observation.component.css']
})
export class ModifyObservationComponent implements OnInit {
/*
 observations: Observation[];
 */
 @Input() modifyObservation: Observation = new Observation;
 
 test: Observable<any>;
 
  participants: Participant[] ;
 // selectedParticipant: Participant = new Participant;
  leaders: Leader[] ;
 // selectedLeader: Leader = new Leader;
  activitys: Activity[] ;
//  selectedActivity: Activity = new Activity;



  constructor(private route: ActivatedRoute
    , private observationService: ObservationService
    ,private leaderService: LeaderService
    ,private activityService: ActivityService
    ,private participantService: ParticipantService,
    private location: Location) { }

  ngOnInit() {
  this.getObservation();
   this.getParticipants();
  this.getLeaders();
  this.getActivitys();


  }
  

 @Input() set observationId(id: number) {
 this.getObservationById(id);
  // TODO how to ensure all services have returned?
/*  this.setSelectedParticipant(this.modifyObservation.participantId);
  this.setSelectedLeader(this.modifyObservation.leaderId);
  this.setSelectedActivity(this.modifyObservation.activityId);
 */
}
 
getObservationById(id: number): void{
 this.observationService.getObservation(id)
  .subscribe(modifyObservation => this.modifyObservation = modifyObservation);
}

getObservation(): void{
   const id = +this.route.snapshot.paramMap.get('id');
 this.observationService.getObservation(id)
  .subscribe(modifyObservation => this.modifyObservation = modifyObservation);
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


 /*
getObservations(): void {
 
  this.observationService.getObservations()
  .subscribe(observations => this.observations = observations);
}*/

modify(): void {
  this.observationService.updateObservation(this.modifyObservation)
  .subscribe(modifyObservation => this.modifyObservation = modifyObservation);
  
  //this.getObservations();
 // this.location.back();
 //window.history.back();
}

delete(): void {
this.observationService.deleteObservation(this.modifyObservation).subscribe(
      error => this.test = error
      );
this.modifyObservation = new Observation;
//this.getObservations();
// todo -> route further otherwise your stuck.
//this.location.back();
}
/*
onChange(newValue){
this.getObservation(newValue);
}
*/
/*
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
*/



  onActivityChange(newValue){
  this.modifyObservation.activityId = newValue;
  //this.setSelectedActivity(newValue);

}

  onLeaderChange(newValue){
  this.modifyObservation.leaderId = newValue;
   // this.setSelectedLeader(newValue);


}
 onParticipantChange(newValue){
  this.modifyObservation.participantId = newValue;
    //this.setSelectedParticipant(newValue);

}


}
