import { Component, OnInit } from '@angular/core';

import {MatNativeDateModule,MatFormField} from '@angular/material'; 

import { Activity } from '../model/activity'

import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {
  
  addActivity: Activity = new Activity;
  
    addedActivity: Activity = new Activity;
    
  constructor(private activityService: ActivityService) { }

  ngOnInit() {
  }
  
  
  add(){


  
   this.activityService.addActivity(this.addActivity)
  .subscribe(activity => this.addedActivity = activity);
  
    this.addActivity = new Activity;
  
  }
}

