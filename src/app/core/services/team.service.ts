import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  public uri = 'http://localhost:8008/teams/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.uri);
  }

  addTeam(t: any) {
    return this.http.post(this.uri + '/add', t);
  }

  updateTeam(t: any): Observable<Object> {
    return this.http.put(this.uri + '/update', t);
  }

  getTeamById(id: number) {
    return this.http.get(this.uri + `/?id=${id}`);
  }

  deleteTeam(id: number): Observable<Object> {
    return this.http.delete(this.uri + `/?id=${id}`);
  }
}
