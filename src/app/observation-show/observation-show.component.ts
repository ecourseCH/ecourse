import { Component, OnInit, Input} from '@angular/core';

import { Router } from '@angular/router';

import { Observation } from '../model/observation'

import { ObservationService } from '../observation.service';


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
 
  constructor(private router: Router,private observationService: ObservationService) { }

  ngOnInit() {
 /* this.getSomeObservations();
  this.showObservations = this.observations;*/
  }
  
  getObservations(): void {
  this.observationService.getObservations()
  .subscribe(observations => this.observations = observations);
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
