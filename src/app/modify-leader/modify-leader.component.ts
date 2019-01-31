import { Component, OnInit } from '@angular/core';

import {NgForm } from '@angular/forms';

import { Leader } from '../model/leader'

import { LeaderService } from '../leader.service';

import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-modify-leader',
  templateUrl: './modify-leader.component.html',
  styleUrls: ['./modify-leader.component.css']
})
export class ModifyLeaderComponent implements OnInit {

 leaders: Leader[];
 
 modifyLeader: Leader = new Leader;
 
 test: Observable<any>;
 
  constructor(private leaderService: LeaderService) { }

  ngOnInit() {
  this.getLeaders();
  }
  
getLeader(Id){
 this.leaderService.getLeader(Id)
  .subscribe(modifyLeader => this.modifyLeader = modifyLeader);
}
  
getLeaders(): void {
 
  this.leaderService.getLeaders()
  .subscribe(leaders => this.leaders = leaders);
}

modify(): void {
  this.leaderService.updateLeader(this.modifyLeader)
  .subscribe();
  this.modifyLeader = new Leader;
  this.getLeaders();
}

delete(): void {
this.leaderService.deleteLeader(this.modifyLeader).subscribe(
      error => this.test = error
      );
this.modifyLeader = new Leader;
this.getLeaders();
}
onChange(newValue){
this.getLeader(newValue);
}
abort(): void{
this.modifyLeader = new Leader;
}
}
