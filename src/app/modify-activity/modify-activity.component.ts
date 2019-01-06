import { Component, OnInit } from '@angular/core';

import {NgForm } from '@angular/forms';

import { Activity } from '../model/activity'

import { ActivityService } from '../activity.service';

import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-modify-activity',
  templateUrl: './modify-activity.component.html',
  styleUrls: ['./modify-activity.component.css']
})
export class ModifyActivityComponent implements OnInit {

 activitys: Activity[];
 
 modifyActivity: Activity = new Activity;
 
selectedActivityId: number ;

 test: Observable<any>;
 
  constructor(private activityService: ActivityService) { }

  ngOnInit() {
  this.getActivitys();
  }
 /* 
getActivity(id){
for (var i=0; i<this.activitys.length; i++){
  if(this.activitys[i].activityId == id){
    // set activity
    this.modifyActivity = this.activitys[i];
  } 
 if (this.modifyActivity.activityId == id){
 // success 
} else {
 // TODO error case
}
}



}
*/  
getActivitys(): void {
 
  this.activityService.getActivitys()
  .subscribe(activitys => this.activitys = activitys);
}

modify(): void {
  this.activityService.updateActivity(this.modifyActivity)
  .subscribe(modifyActivity => this.modifyActivity = modifyActivity);
  
  this.getActivitys();

}

delete(): void {
this.activityService.deleteActivity(this.modifyActivity).subscribe(
      error => this.test = error
      );
this.modifyActivity = new Activity;
this.getActivitys();
}
onChange(newValue){
//this.getActivity(newValue);
this.selectedActivityId = newValue;
for (var i=0; i<this.activitys.length; i++){
  if(this.activitys[i].activityId == newValue){
    // set activity
    this.modifyActivity = this.activitys[i];
  } 
 if (this.modifyActivity.activityId == newValue){
 // success 
} else {
 // TODO error case
}
}

}
}