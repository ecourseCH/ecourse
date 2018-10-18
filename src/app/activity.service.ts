import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Activity } from './model/activity';


import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {
 private activitysUrl = 'http://localhost:3000/activity';  // URL to web api

  constructor(private http: HttpClient) { }
  
  getActivitys(): Observable<Activity[]> {
  return this.http.get<Activity[]>(this.activitysUrl); 
  }
  getActivity(id: number): Observable<Activity> {
  const url =this.activitysUrl.concat("/").concat(id.toString());
  return this.http.get<Activity>(url); 
  }

  
}
