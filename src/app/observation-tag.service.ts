import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ObservationTag,ObservationTagTree } from './model/observationTag';


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
  getObservationTagTree(): Observable<ObservationTagTree[]> {
   const url =this.observationTagsUrl.concat("Tree");
  return this.http.get<ObservationTagTree[]>(url); 
  }
  getObservationTag(id: number): Observable<ObservationTag> {
  const url =this.observationTagsUrl.concat("/").concat(id.toString());
  return this.http.get<ObservationTag>(url); 
  }
  saveObservationTagTree(tree: ObservationTagTree[]):  Observable<ObservationTagTree[]> {
   const url =this.observationTagsUrl.concat("Tree");
  return this.http.post<ObservationTagTree[]>(url,tree); 
  }
  
}
