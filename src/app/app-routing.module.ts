import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { ParticipantDetailComponent } from './participant-detail/participant-detail.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityComponent } from './activity/activity.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent }, 
  { path: 'participant/:id', component: ParticipantDetailComponent },
  { path: 'participant', component: ParticipantListComponent },
  { path: 'activity', component: ActivityListComponent },
    { path: 'activity/:id', component: ActivityComponent }
];
@NgModule({
 imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

