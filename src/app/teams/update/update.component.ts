import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/app/core/Model/Team';
import { TeamService } from 'src/app/core/services/team.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  teamId!: number;
  team!: Team;
  teamForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    desc: ['', [Validators.required, Validators.minLength(10)]]
  });

  constructor(
    private teamService: TeamService,
    private currentRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.params['id'];
    if (!id) {
      this.router.navigate(['/teams'])
    } else {
      this.teamId = id;
    }

    this.teamService.getTeamById(id).subscribe((team: any) => {
      this.team = team[0];
      this.teamId = team[0].id;      
    });
  }

  update() {
    let name = this.teamForm.get('name')?.value;
    let description= this.teamForm.get('desc')?.value;
    console.log(name, description);
    // let team = new Team();
    // team.id = this.teamId;
    // this.teamService.updateTeam(team).subscribe(() => {
    //   this.router.navigate(['/teams']);
    // })
  }

}
