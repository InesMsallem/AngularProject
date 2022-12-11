import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Projet } from 'src/app/core/Model/Projet';
import { ProjetService } from 'src/app/core/services/projet.service';

@Component({
  selector: 'app-list-projet',
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.css']
})
export class ListProjetComponent implements OnInit {

  constructor(private projetService :ProjetService,
   private route:Router ) { }

  projet: Projet;
  search: string;

  projetList: Projet[];
  ngOnInit(): void {
    this.allProjet();
    this.projet = new Projet();
    
  
  }
  setSearch(event:any){
    console.log("value",event.target.value);
    this.search =event.target.value;
  }
  FindbyNom(){
    
    this.projetService.findByNom(this.search).subscribe((res) => {
      console.log("list from res :",res);
      if (res.length!=0){
        this.projetList = res;
      }
      else{
        this.projetList = [];
      }
      
    });

  }
  allProjet() {
    this.projetService.getAll().subscribe((res) => {
      this.projetList = res;
    });
  }
  //addContract
  add() {
    this.projetService.create
      (this.projet)
      .subscribe(
        () => (this.projetList = [this.projet, ...this.projetList])
      );
  }
  deleteProjet(idProjet: any) {
    this.projetService.delete(idProjet).subscribe((data) => {
      console.log(data);
      this.allProjet();
    });
  }
  //updateContract
  postList(): void {
    this.projetService.getAll().subscribe((data: Projet[]) => {
      this.projetList = data;
    });
  }
  updateProjet(idProjet: any) {
    this.route.navigate(['/gestionprojet/projet/putProjet', idProjet]);
  }
  
}