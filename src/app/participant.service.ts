import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Participant } from './model/participant';


import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
 private participantsUrl = 'http://localhost:3000/participant';  // URL to web api

  constructor(private http: HttpClient) { }
  
  getParticipants(): Observable<Participant[]> {
  return this.http.get<Participant[]>(this.participantsUrl); 
  }
  getParticipant(id: number): Observable<Participant> {
  const url =this.participantsUrl.concat("/").concat(id.toString());
  return this.http.get<Participant>(url); 
  }
  addParticipant(participant: Participant): Observable<any> {
  return this.http.post(this.participantsUrl, participant);};
 /* updateHero (hero: Hero): Observable<any> {
  return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${hero.id}`)),
    catchError(this.handleError<any>('updateHero'))
  );
}*/
}
