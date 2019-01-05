import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
/*
 observations: Observation[];
 */
 @Input() modifyObservation: Observation = new Observation;
 
 test: Observable<any>;
 
  constructor(private route: ActivatedRoute, private observationService: ObservationService) { }

  ngOnInit() {
  this.getObservation();
  }
  

 @Input() set observationId(id: number) {
 this.getObservationById(id);

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
 /*
getObservations(): void {
 
  this.observationService.getObservations()
  .subscribe(observations => this.observations = observations);
}
*/
modify(): void {
  this.observationService.updateObservation(this.modifyObservation)
  .subscribe(modifyObservation => this.modifyObservation = modifyObservation);
  
  //this.getObservations();
}

delete(): void {
this.observationService.deleteObservation(this.modifyObservation).subscribe(
      error => this.test = error
      );
this.modifyObservation = new Observation;
//this.getObservations();
// todo -> route further otherwise your stuck.
}
/*
onChange(newValue){
this.getObservation(newValue);
}
*/
}
