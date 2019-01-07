import { Component, OnInit , AfterViewInit , ViewChild} from '@angular/core';


import { ObservationTag, ObservationTagTree } from '../model/observationTag'

import { ObservationTagService } from '../observation-tag.service';


import { TreeComponent, TreeNode, TreeModel ,TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';

@Component({
  selector: 'app-observation-tag',
  templateUrl: './observation-tag.component.html',
  styleUrls: ['./observation-tag.component.css']
})
export class ObservationTagComponent implements OnInit {

  @ViewChild('tree') treeComponent: TreeComponent;

observationTags: ObservationTag[];
 
 observationTagTree: ObservationTagTree[];

 observationTreeOptions: ITreeOptions =
 {
  displayField: 'observationTagName',
    //isExpandedField: 'expanded',
    idField: 'observationTagId',
    hasChildrenField: 'children',
    actionMapping: {
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
    },
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

public log: string = "Hello world";

  constructor(private observationTagService: ObservationTagService) {
  
  }
  ngOnInit() {
  this.getObservationTagTree();
this.log= "nginit"
  }
  /*
  ngAfterViewInit() {
    this.tree.treeModel.expandAll();
  }
*/

// TODO why does this not work???
  ngAfterInit() {
    const treeModel:TreeModel = this.treeComponent.treeModel;
    const firstNode:TreeNode = treeModel.getFirstRoot();
    firstNode.expandAll();
    //firstNode.setActiveAndVisible();
    treeModel.expandAll();
    this.log = "afterviewinit";
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

  delete(){
    //TODO
  }
  add(){
    //TOOD
  }
  modify(){

  }
  expandAll(){
      const treeModel:TreeModel = this.treeComponent.treeModel;
    treeModel.expandAll();
        this.log = "expand all";
//window.location.reload();
  }
  collapseAll(){
          const treeModel:TreeModel = this.treeComponent.treeModel;
    treeModel.collapseAll();
        this.log = "collapse all";
//window.location.reload();
  }
  
}
