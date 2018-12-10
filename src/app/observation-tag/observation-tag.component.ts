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

  
  /* testing of trees */
  
  tree = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];
  options = {};
  
  
  
  
  
  
}
