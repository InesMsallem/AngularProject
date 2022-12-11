import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projet } from '../Model/Projet';

const baseUrl = 'http://localhost:8088/api/Projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Projet[]> {
    return this.http.get<Projet[]>(baseUrl+"/getallProjets");
  }
  findByNom(nom: any): Observable<Projet[]> {
    return this.http.get<Projet[]>(baseUrl+"/getprojetbynom/"+nom);
  }

  get(id: any): Observable<Projet> {
    return this.http.get<Projet>(`${baseUrl}/getProjet/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl+"/addProjet", data);
  }
 
  updateProjet(projet: Projet): Observable<any>
   { return this.http.put<Projet>(baseUrl  + `/updateProjet/`,projet); }
  

  /*delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl+"/deleteProjet"}/${id}`);
  }*/
  delete(idProjet: any): Observable<Object> {
    return this.http.delete(baseUrl + `/deleteProjet/${idProjet}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Projet[]> {
    return this.http.get<Projet[]>(`${baseUrl}?title=${title}`);
  }
}

