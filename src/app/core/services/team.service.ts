import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../Model/Team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  public uri = 'http://localhost:8008/teams/';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })
  };
  
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Team[]>(this.uri);
  }
  
  getTeamById(id: number) {
    return this.http.get<Team>(this.uri + `?id=${id}`);
  }

  addTeam(t: any) {
    return this.http.post(this.uri + 'add', t);
  }

  updateTeam(t: any): Observable<Object> {
    return this.http.put(this.uri + 'update', t);
  }

  deleteTeam(id: number): Observable<Object> {
    return this.http.delete(this.uri + `delete/?id=${id}`);
  }
}