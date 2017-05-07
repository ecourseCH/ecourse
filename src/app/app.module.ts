import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListParticipantsComponent } from './list-participants/list-participants.component';
import { ParticipantDetailComponent } from './participant-detail/participant-detail.component';

const appRoutes : Routes = [
  { path: 'participants',      component: ListParticipantsComponent },  
  { path: 'participant',      component: ParticipantDetailComponent },
  { path: '',   redirectTo: 'participants', pathMatch: 'full' },
]


@NgModule({
  declarations: [
    AppComponent,
    ListParticipantsComponent,
    ParticipantDetailComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
