import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/core/Model/Etudiant';
import { EtudiantService } from 'src/app/core/services/etudiant.service';
import { Store } from '@ngrx/store';
import { loadStudents } from '@core/store/students/students.actions';
import * as fromStore from '@core/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {

  etudiant: Etudiant;
  etudiantList: Etudiant[];

  constructor(private etudiantService: EtudiantService, private store: Store<fromStore.State>) { }

  students$ = this.store.select(fromStore.getStudents);

  ngOnInit(): void {
    this.store.dispatch(loadStudents());
    this.students$.subscribe(students => {
      console.log(students);
      
    })
    
    // this.etudiant = new Etudiant();
    // //getEtudiants
    // this.etudiantService.getAllEtudiant().subscribe((data: Etudiant[]) => {
    //   this.etudiantList = data;
    // });
  }

  delete(id: number) {
    this.etudiantService.deleteEtudiant(id).subscribe((data) => {
      console.log(data);
      this.etudiantService.getAllEtudiant();
      location.reload();
    
  })
}

}
