import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observation } from './model/observation';


import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ObservationService {
 private observationsUrl = 'http://localhost:3000/observation';  // URL to web api

  constructor(private http: HttpClient) { }
  
  getObservations(): Observable<Observation[]> {
  return this.http.get<Observation[]>(this.observationsUrl); 
  }
  getObservation(id: number): Observable<Observation> {
  const url =this.observationsUrl.concat("/").concat(id.toString());
  return this.http.get<Observation>(url); 
  }

  
}
