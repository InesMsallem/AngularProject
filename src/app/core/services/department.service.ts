import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Departement } from '../Model/Department';
import { Universite } from '../Model/Universite';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  allUniversites: Universite[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http : HttpClient) { }
  url: string = 'http://localhost:8080/Spring';


  getAlldep() {
    return this.http.get<Departement[]>(this.url + `/getallDepartement`);
  }
  getAllUniv() {
    return this.http.get<Universite[]>(this.url + `/getUniversiteee`);
  }

  addDepartmenttoUniv(departement:Departement): Observable<Object> {
    return this.http.post<Object>( this.url+ `/addDepartement/`,departement);
  }

  addDeparttouni(id: any): Observable<Departement> {
    return this.http.post<Departement>(this.url +'/addnewDepartToUniv/'+id, this.httpOptions)
  }
  //updateDepartment(idDepart: number,department: department): Observable<Object> {
    //return this.http.put(this.url + `/putDep/${idDepart}`, department);
 // }
   getUniversites() : Observable<Universite[]>{
  return this.http.get<Universite[]>(this.url + '/getallUniversite', this.httpOptions)
}

 
  deleteDepartment(idDepartement: number): Observable<Object> {
    return this.http.delete(this.url + `/deleteDepartement/${idDepartement}`);
  }
  getDepartmentById(idDepartement: number): Observable<Departement> {
    return this.http.get<Departement>(this.url + `/getDepart/${idDepartement}`);
  } 
 
  updateDepartment(department: Departement): Observable<any> {
    return this.http.put<Departement>(this.url + `/putDepatement/`,department);
  }
  exportPDF(): Observable<any> {
    return this.http.get<Departement>(this.url + `/pdfDownload`, {
      responseType: 'blob' as 'json'});
  }
  Getdepart (nomUniversite:String){
    return this.http.get<Departement>(this.url + `/getdepartbyUniv/${nomUniversite}`);}


    getDepartmentByIdList(idDepartement: number): Observable<any[]> {
      return this.http.get<any[]>(this.url + `/getDepart/${idDepartement}`);
    } 
   
    getDepartmentByIdUniv(nomUniversite: String): Observable<Departement[]> {
      return this.http.get<Departement[]>(this.url + `/getDepartmentUniversite/${nomUniversite}`);
    } 
   
    updateDepart(idDepartement: number,department: Departement): Observable<any> {
      return this.http.put(this.url + `/updateDepartement/${idDepartement}`,department
      );
    }
   
}