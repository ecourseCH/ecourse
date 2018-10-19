import { Component, OnInit } from '@angular/core';


import { ObservationTag } from '../model/observationTag'

import { ObservationTagService } from '../observation-tag.service';



@Component({
  selector: 'app-observation-tag',
  templateUrl: './observation-tag.component.html',
  styleUrls: ['./observation-tag.component.css']
})
export class ObservationTagComponent implements OnInit {
observationTags: ObservationTag[];
 
 showObservationTags: ObservationTag[];
 
  constructor(private observationTagService: ObservationTagService) {
  
  }
  ngOnInit() {
  this.getObservationTags();
  this.showObservationTags = this.observationTags;
  }
  
  getObservationTags(): void {
  this.observationTagService.getObservationTags()
  .subscribe(observationTags => this.observationTags = observationTags);
  }

  
}
