import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Leader } from './model/leader';


import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {
private leadersUrl = 'http://localhost:3000/leader';  // URL to web api

  constructor(private http: HttpClient) { }
  
  getLeaders(): Observable<Leader[]> {
  return this.http.get<Leader[]>(this.leadersUrl); 
  };
  
  getLeader(id: number): Observable<Leader> {
  const url =this.leadersUrl.concat("/").concat(id.toString());
  return this.http.get<Leader>(url); 
  }
  addLeader(leader: Leader): Observable<Leader> {
  
  return this.http.post<Leader>(this.leadersUrl, leader);
  
  };
  
  updateLeader(leader: Leader): Observable<Leader> {
    const url =this.leadersUrl.concat("/").concat(leader.leaderId.toString());
  return this.http.post<Leader>(url, leader);
  
  };
  
  deleteLeader(leader: Leader): Observable<any>{
     const url =this.leadersUrl.concat("/").concat(leader.leaderId.toString());
 return this.http.delete(url);
  }
  

}
