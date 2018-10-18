import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Activity } from '../model/activity'

import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

@Input() activity: Activity;

constructor( private route: ActivatedRoute,
private activityService: ActivityService,
  private location: Location
) { }

  ngOnInit() {
  this.getActivity();
  }
  

  
getActivity(): void {
 const id = +this.route.snapshot.paramMap.get('id');
  this.activityService.getActivity(id)
  .subscribe(activity => this.activity = activity);
}

}
