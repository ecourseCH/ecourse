import { NgModule }             from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ParticipantListComponent } from './participant-list/participant-list.component';
// import { AddParticipantComponent } from './add-participant/add-participant.component';
import {CourseSetupComponent } from './course-setup/course-setup.component';
import { ParticipantDetailComponent } from './participant-detail/participant-detail.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityComponent } from './activity/activity.component';
import { ObservationTagComponent } from './observation-tag/observation-tag.component';
import { AddObservationComponent } from './add-observation/add-observation.component';
import { ModifyObservationComponent } from './modify-observation/modify-observation.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
//  { path: '/', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'login', component: LoginComponent }, 
  { path: 'dashboard', component: DashboardComponent }, 
  { path: 'participant/:id', component: ParticipantDetailComponent },
  { path: 'participant', component: ParticipantListComponent },
 /* { path: 'addparticipant', component: AddParticipantComponent }, */
  { path: 'courseSetup', component: CourseSetupComponent },
  { path: 'observationTag', component: ObservationTagComponent },
  { path: 'observation', component: AddObservationComponent },
    { path: 'observation/:id', component: ModifyObservationComponent },
  { path: 'activity', component: ActivityListComponent },
    { path: 'activity/:id', component: ActivityComponent }
];
@NgModule({
 imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})
export class AppRoutingModule {}

