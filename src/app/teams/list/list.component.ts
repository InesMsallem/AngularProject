import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from 'src/app/core/Model/Team';
import { TeamService } from 'src/app/core/services/team.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  teams!: Team[];
  search: String = '';

  constructor(private teamService: TeamService, private router: Router) { }

  ngOnInit(): void {
    this.teamService.getAll().subscribe(teams => {
      console.log(teams);
      this.teams = teams;
    })
  }

  public get filteredTeams() : Team[] {
    if (this.search.trim() != '') {
      let s = this.search.trim().toUpperCase();
      return this.teams.filter(t => {
        t.name.toUpperCase().includes(s) || t.description.toUpperCase().includes(s);
      })
    }
    return this.teams;
  }

  goToAdd() {
    this.router.navigate(['teams/add']);
  }

  goToDelete(id: any) {
    this.router.navigate(['teams/delete', id]);
  }

  goToUpdate(id: any) {
    this.router.navigate(['teams/update', id]);
  }
  
}
