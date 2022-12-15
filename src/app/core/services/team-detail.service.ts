import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detail } from '../Model/Detail';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  public uri = 'http://localhost:8008/teams/details/';

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })
  };

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Detail[]>(this.uri);
  }

  getDetailById(id: number) {
    return this.http.get<Detail>(this.uri + `?id=${id}`);
  }

  addDetail(t: any) {
    return this.http.post(this.uri + 'add', t);
  }

  updateDetail(t: any): Observable<Object> {
    return this.http.put(this.uri + 'update', t);
  }

  deleteDetail(id: number): Observable<Object> {
    return this.http.delete(this.uri + `delete/?id=${id}`);
  }
}
