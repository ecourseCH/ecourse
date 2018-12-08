import { Component, OnInit } from '@angular/core';

import { Leader } from '../model/leader'

import { LeaderService } from '../leader.service';

@Component({
  selector: 'app-add-leader',
  templateUrl: './add-leader.component.html',
  styleUrls: ['./add-leader.component.css']
})
export class AddLeaderComponent implements OnInit {
  
  addLeader: Leader = new Leader;
  
    addedLeader: Leader = new Leader;
    
  constructor(private leaderService: LeaderService) { }

  ngOnInit() {
  }
  
  
  add(){


  
   this.leaderService.addLeader(this.addLeader)
  .subscribe(leader => this.addedLeader = leader);
  
    this.addLeader = new Leader;
  
  }
}

