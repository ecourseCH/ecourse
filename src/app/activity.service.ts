import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Activity } from './model/activity';


import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
private activitysUrl = 'http://localhost:3000/activity';  // URL to web api

  constructor(private http: HttpClient) { }
  
  getActivitys(): Observable<Activity[]> {
  return this.http.get<Activity[]>(this.activitysUrl); 
  };
  
  getActivity(id: number): Observable<Activity> {
  const url =this.activitysUrl.concat("/").concat(id.toString());
  return this.http.get<Activity>(url); 
  }
  addActivity(activity: Activity): Observable<Activity> {
  
  return this.http.post<Activity>(this.activitysUrl, activity);
  
  };
  
  updateActivity(activity: Activity): Observable<Activity> {
    const url =this.activitysUrl.concat("/").concat(activity.activityId.toString());
  return this.http.post<Activity>(url, activity);
  
  };
  
  deleteActivity(activity: Activity): Observable<any>{
     const url =this.activitysUrl.concat("/").concat(activity.activityId.toString());
 return this.http.delete(url);
  }
  

}
