import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tache } from '../Model/Tache';

const baseUrl = 'http://localhost:8088/api/Tache';


@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Tache[]> {
    return this.http.get<Tache[]>(baseUrl+"/getallTaches");
  }
  findByNom(nom: any): Observable<Tache[]> {
    return this.http.get<Tache[]>(baseUrl+"/getprojetbynom/"+nom);
  }

  get(id: any): Observable<Tache> {
    return this.http.get<Tache>(`${baseUrl}/getTache/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl+"/addTache", data);
  }
 
  updateTache(projet: Tache): Observable<any>
   { return this.http.put<Tache>(baseUrl  + `/updateTache/`,projet); }
  

  /*delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl+"/deleteProjet"}/${id}`);
  }*/
  delete(idProjet: any): Observable<Object> {
    return this.http.delete(baseUrl + `/deleteTache/${idProjet}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Tache[]> {
    return this.http.get<Tache[]>(`${baseUrl}?title=${title}`);
  }
  aadTachetoProjet(nomT:any,nomP:any)  {
    return this.http.get(`${baseUrl}/affectTtoProjet/${nomT}/${nomP}`);
  }

}

