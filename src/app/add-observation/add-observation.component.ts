import { Component, OnInit } from '@angular/core';

import { Observation } from '../model/observation'

import { ObservationService } from '../observation.service';

@Component({
  selector: 'app-add-observation',
  templateUrl: './add-observation.component.html',
  styleUrls: ['./add-observation.component.css']
})
export class AddObservationComponent implements OnInit {
  
  addObservation: Observation = new Observation;
  
    addedObservation: Observation = new Observation;
    
  constructor(private observationService: ObservationService) { }

  ngOnInit() {
  }
  
  
  add(){


  
   this.observationService.addObservation(this.addObservation)
  .subscribe(observation => this.addedObservation = observation);
  
    this.addObservation = new Observation;
  
  }
}

