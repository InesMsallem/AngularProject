import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Team } from 'src/app/core/Model/Team';
import { TeamService } from 'src/app/core/services/team.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  teamForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    desc: ['', [Validators.required, Validators.minLength(10)]]
  });

  constructor(private teamService: TeamService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
  }

  add() {
    let name = this.teamForm.get('name')?.value;
    let description= this.teamForm.get('desc')?.value;
    console.log(name, description);
    
    // let team = new Team();
    // this.teamService.addTeam(team).subscribe(() => {
    //   this.router.navigate(['/teams']);
    // }) 
  }
}
