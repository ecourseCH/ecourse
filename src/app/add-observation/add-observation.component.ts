import { Component, OnInit } from '@angular/core';

import { Observation } from '../model/observation'

import { ObservationService } from '../observation.service';

import { Participant } from '../model/participant'

import { ParticipantService } from '../participant.service';

import { Leader } from '../model/leader'

import { LeaderService } from '../leader.service';

import { Activity } from '../model/activity'

import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-add-observation',
  templateUrl: './add-observation.component.html',
  styleUrls: ['./add-observation.component.css']
})
export class AddObservationComponent implements OnInit {

  addObservation: Observation = new Observation;

  addedObservation: Observation = new Observation;

  participants: Participant[] ;
participant: Participant = new Participant;
  leaders: Leader[] ;
leader: Leader = new Leader;
  activitys: Activity[] ;
  activity: Activity = new Activity;

  

  

  

  constructor(private observationService: ObservationService
    ,private leaderService: LeaderService
    ,private activityService: ActivityService
    ,private participantService: ParticipantService) { }

  ngOnInit() {
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

  add(){

   this.observationService.addObservation(this.addObservation)
  .subscribe(observation => this.addedObservation = observation);

    this.addObservation = new Observation;

  }

  onActivityChange(newValue){
  this.addObservation.activityId = newValue;
    // TODO what do I need to do that the dropdown shows me the current selected object?
/*
   this.activityService.getActivity(newValue)
  .subscribe(activity => this.activity = activity);
*/
}

  onLeaderChange(newValue){
  this.addObservation.leaderId = newValue;
  // TODO what do I need to do that the dropdown shows me the current selected object?
  /* this.activityService.getActivity(newValue)
  .subscribe(activity => this.activity = activity);
*/
}
 onParticipantChange(newValue){
  this.addObservation.participantId = newValue;
    // TODO what do I need to do that the dropdown shows me the current selected object?

/*    this.activityService.getActivity(newValue)
  .subscribe(activity => this.activity = activity);
  */
}

}

