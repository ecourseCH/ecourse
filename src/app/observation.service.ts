import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observation } from './model/observation';


import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ObservationService {
 private observationsUrl = 'http://localhost:3000/observation';  // URL to web api

  constructor(private http: HttpClient) { }
  
  getObservations(): Observable<Observation[]> {
  return this.http.get<Observation[]>(this.observationsUrl); 
  }
  
  
  getSomeObservations(observation: Observation): Observable<Observation[]> {
    const url =this.observationsUrl.concat("filter");
  return this.http.post<Observation[]>(url,observation); 
  }
  
  
  getObservation(id: number): Observable<Observation> {
  const url =this.observationsUrl.concat("/").concat(id.toString());
  return this.http.get<Observation>(url); 
  }
  
  
 addObservation(observation: Observation): Observable<Observation> {
  
  return this.http.post<Observation>(this.observationsUrl, observation);
  
  };
  
  updateObservation(observation: Observation): Observable<Observation> {
    const url =this.observationsUrl.concat("/").concat(observation.observationId.toString());
  return this.http.post<Observation>(url, observation);
  
  };
  
  deleteObservation(observation: Observation): Observable<any>{
     const url =this.observationsUrl.concat("/").concat(observation.observationId.toString());
 return this.http.delete(url);
  }
  
}
