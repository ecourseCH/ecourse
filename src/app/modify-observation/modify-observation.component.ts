import { Component, OnInit } from '@angular/core';

import {NgForm } from '@angular/forms';

import { Observation } from '../model/observation'

import { ObservationService } from '../observation.service';

import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-modify-observation',
  templateUrl: './modify-observation.component.html',
  styleUrls: ['./modify-observation.component.css']
})
export class ModifyObservationComponent implements OnInit {

 observations: Observation[];
 
 modifyObservation: Observation = new Observation;
 
 test: Observable<any>;
 
  constructor(private observationService: ObservationService) { }

  ngOnInit() {
  this.getObservations();
  }
  
getObservation(Id){
 this.observationService.getObservation(Id)
  .subscribe(modifyObservation => this.modifyObservation = modifyObservation);
}
  
getObservations(): void {
 
  this.observationService.getObservations()
  .subscribe(observations => this.observations = observations);
}

modify(): void {
  this.observationService.updateObservation(this.modifyObservation)
  .subscribe(modifyObservation => this.modifyObservation = modifyObservation);
  
  this.getObservations();
}

delete(): void {
this.observationService.deleteObservation(this.modifyObservation).subscribe(
      error => this.test = error
      );
this.modifyObservation = new Observation;
this.getObservations();
}
onChange(newValue){
this.getObservation(newValue);
}

}
