import { Component, OnInit } from '@angular/core';


import { ObservationTag, ObservationTagTree } from '../model/observationTag'

import { ObservationTagService } from '../observation-tag.service';



@Component({
  selector: 'app-observation-tag',
  templateUrl: './observation-tag.component.html',
  styleUrls: ['./observation-tag.component.css']
})
export class ObservationTagComponent implements OnInit {

observationTags: ObservationTag[];
 
 observationTagTree: ObservationTagTree[];

 observationTreeOptions = 
 {
  displayField: 'observationTagName',
    //isExpandedField: 'expanded',
    idField: 'observationTagId',
    hasChildrenField: 'children',
  /*  actionMapping: {
      mouse: {
        dblClick: (tree, node, $event) => {
          if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
        }
      },
      keys: {
        [KEYS.ENTER]: (tree, node, $event) => {
          node.expandAll();
        }
      }
    },*/
    nodeHeight: 23,
    allowDrag: (node) => {
      return true;
    },
    allowDrop: (node) => {
      return true;
    },
    allowDragoverStyling: true,
    levelPadding: 10,
   // useVirtualScroll: true,
    animateExpand: true,
   // scrollOnActivate: true,
    animateSpeed: 30,
    animateAcceleration: 1.2,
    //scrollContainer: document.documentElement // HTML
  }

  constructor(private observationTagService: ObservationTagService) {
  
  }
  ngOnInit() {
  this.getObservationTagTree();
  }
  
  getObservationTags(): void {
  this.observationTagService.getObservationTags()
  .subscribe(observationTags => this.observationTags = observationTags);
  }

  getObservationTagTree(): void {
  this.observationTagService.getObservationTagTree()
  .subscribe(observationTagTree => this.observationTagTree = observationTagTree);
  }
  
  saveTree(){
  this.observationTagService.saveObservationTagTree(this.observationTagTree).subscribe(observationTagTree => this.observationTagTree = observationTagTree);
  }

  
  
  
  
  
}
