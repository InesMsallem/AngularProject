import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Tache } from 'src/app/core/Model/Tache';
import { TacheService } from 'src/app/core/services/tache.service';

@Component({
  selector: 'app-list-tache',
  templateUrl: './list-tache.component.html',
  styleUrls: ['./list-tache.component.css']
})
export class ListTacheComponent implements OnInit {

  constructor(private tacheservice :TacheService,
    private route:Router ) { }
    tache: Tache;
    search: string;
  searchText :string;
    tacheList: Tache[];
    ngOnInit(): void {
      this.allTache();
      this.tache = new Tache();  
  }
  setSearch(event:any){
    console.log("value",event.target.value);
    this.search =event.target.value;
  }
  FindbyNom(){
    
    this.tacheservice.findByNom(this.search).subscribe((res) => {
      console.log("list from res :",res);
      if (res.length!=0){
        this.tacheList = res;
      }
      else{
        this.tacheList = [];
      }
      
    });

  }
  allTache() {
    this.tacheservice.getAllT().subscribe((res) => {
      this.tacheList = res;
    });
}
add() {
  this.tacheservice.create
    (this.tache)
    .subscribe(
      () => (this.tacheList = [this.tache, ...this.tacheList])
    );
}
deleteTache(idTache: any) {
  this.tacheservice.delete(idTache).subscribe((data) => {
    console.log(data);
    this.allTache();
  });
}
//updateContract
postList(): void {
  this.tacheservice.getAllT().subscribe((data: Tache[]) => {
    this.tacheList = data;
  });
}
updateTache(idProjet: any) {
  this.route.navigate(['/gestiontache/tache/putTache/', idProjet]);
}


}
