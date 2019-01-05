
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Activity } from '../model/activity'

import { ActivityService } from '../activity.service';


@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

 activities: Activity[];
 


  constructor(private router: Router,private activityService: ActivityService) {
   }

  ngOnInit() {
  this.getActivitys();
  }
  
getActivitys(): void {
 
  this.activityService.getActivitys().subscribe(activities => this.activities = activities);
}
 goToActivity( id: number){
 	this.router.navigate(["/activity/".concat(id.toString())]);
 }
}
