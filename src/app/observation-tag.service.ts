import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ObservationTag } from './model/observationTag';


import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ObservationTagService {
 private observationTagsUrl = 'http://localhost:3000/observationTag';  // URL to web api

  constructor(private http: HttpClient) { }
  
  getObservationTags(): Observable<ObservationTag[]> {
  return this.http.get<ObservationTag[]>(this.observationTagsUrl); 
  }
  getObservationTag(id: number): Observable<ObservationTag> {
  const url =this.observationTagsUrl.concat("/").concat(id.toString());
  return this.http.get<ObservationTag>(url); 
  }

  
}
