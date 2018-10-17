import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/dataService';
import { Team } from '../common/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
 
  teams: Team[];
  isLoading = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTeamList()
      .subscribe((data) => {
        this.teams = data['data'];
        this.isLoading = false;
      });
  }

  onClick(item){
    console.log(item._id);
  }
}
