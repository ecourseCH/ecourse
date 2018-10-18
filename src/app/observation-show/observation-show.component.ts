import { Component, OnInit } from '@angular/core';


import { Observation } from '../model/observation'

import { ObservationService } from '../observation.service';


@Component({
  selector: 'app-observation-show',
  templateUrl: './observation-show.component.html',
  styleUrls: ['./observation-show.component.css']
})
export class ObservationShowComponent implements OnInit {

 observations: Observation[];
 
 showObservations: Observation[];
 
  constructor(private observationService: ObservationService) { }

  ngOnInit() {
  this.getObservations();
  this.showObservations = this.observations;
  }
  
  getObservations(): void {
  this.observationService.getObservations()
  .subscribe(observations => this.observations = observations);
  }
  /*
  setActivityObservations(activityId: number): void {
  showObservations = observations.filter(matchesActivity);

  showObservations.push(observation);
  } */
  
}
