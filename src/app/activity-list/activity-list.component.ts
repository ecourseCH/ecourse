
import { Component, OnInit } from '@angular/core';

import { Activity } from '../model/activity'

import { ActivityService } from '../activity.service';


@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

 activities: Activity[];
 
  constructor(private activityService: ActivityService) { }

  ngOnInit() {
  this.getActivitys();
  }
  
getActivitys(): void {
 
  this.activityService.getActivitys().subscribe(activities => this.activities = activities);
}

}
