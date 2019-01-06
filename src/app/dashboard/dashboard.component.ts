import { Component, OnInit } from '@angular/core';
import { Participant } from '../model/participant';
import { ParticipantService } from '../participant.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  participants: Participant[] = [];
 
  constructor(private participantService: ParticipantService) { }
 
  ngOnInit() {
    this.getParticipants();
    this.fakeurl();
  }
 
  getParticipants(): void {
    this.participantService.getParticipants()
      .subscribe(participants => this.participants = participants);
  this.fakeurl();

  }

  getRandomNumber(): number {

    return Math.floor(Math.random()*10);
  }
  fakeurl(){
for (var i=0; i<this.participants.length; i++){
  this.participants[i].participantUrl = "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwijmvPEwtffAhVCYVAKHXkwCbYQjRx6BAgBEAU&url=https%3A%2F%2Fwww.xing.com%2Fprofile%2FRoman_Hellmueller&psig=AOvVaw3iv0ed1rmq31PEGZq6IN5J&ust=1546807880141952";
  }
}
}