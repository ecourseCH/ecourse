import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { TreeModule } from 'angular-tree-component';

import { Participant } from './model/participant'
import { Activity } from './model/activity'


import { AppComponent } from './app.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { ParticipantDetailComponent } from './participant-detail/participant-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ParticipantTagComponent } from './participant-tag/participant-tag.component';
import { ObservationTagComponent } from './observation-tag/observation-tag.component';
import { LeaderComponent } from './leader/leader.component';
import { ActivityComponent } from './activity/activity.component';
import { ObservationShowComponent } from './observation-show/observation-show.component';
import { AddParticipantComponent } from './add-participant/add-participant.component';
import { ModifyParticipantComponent } from './modify-participant/modify-participant.component';
import { CourseSetupComponent } from './course-setup/course-setup.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { ModifyActivityComponent } from './modify-activity/modify-activity.component';
import { ModifyLeaderComponent } from './modify-leader/modify-leader.component';
import { AddLeaderComponent } from './add-leader/add-leader.component';
import { AddObservationComponent } from './add-observation/add-observation.component';
import { ModifyObservationComponent } from './modify-observation/modify-observation.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantListComponent,
    ParticipantDetailComponent,
    DashboardComponent,
    ActivityListComponent,
    ParticipantTagComponent,
    ObservationTagComponent,
    LeaderComponent,
    ActivityComponent,
    ObservationShowComponent,
    AddParticipantComponent,
    ModifyParticipantComponent,
    CourseSetupComponent,
    AddActivityComponent,
    ModifyActivityComponent,
    ModifyLeaderComponent,
    AddLeaderComponent,
    AddObservationComponent,
    ModifyObservationComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    AppRoutingModule, 
    FormsModule,
    TreeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
