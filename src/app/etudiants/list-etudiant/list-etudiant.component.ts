import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/core/Model/Account';
import { Etudiant } from 'src/app/core/Model/Etudiant';
import { EtudiantService } from 'src/app/core/services/etudiant.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {

  account:Account;
  accountList:Account[];
  etudiant: Etudiant;
  etudiantList: Etudiant[];

  constructor(private etudiantService: EtudiantService, private userService: UserService) { }

  ngOnInit(): void {
    this.account=new Account();
    this.etudiant = new Etudiant();
    //getEtudiants
    /*this.etudiantService.getAllEtudiant().subscribe((data: Etudiant[]) => {
      this.etudiantList = data;
    });*/
    //getAccounts
    this.userService.getAllAccount().subscribe((data: Account[]) => {
      this.accountList = data;
      
    });

  }

  delete(id: number) {
    this.etudiantService.deleteEtudiant(id).subscribe((data) => {
      console.log(data);
      this.etudiantService.getAllEtudiant();
      location.reload();
    
  })
}
deleteAccount(userName: string) {
  this.userService.deletaccount(userName).subscribe((data) => {
    console.log(data);
    this.userService.getAllAccount();
    location.reload();
  
})
}
}
