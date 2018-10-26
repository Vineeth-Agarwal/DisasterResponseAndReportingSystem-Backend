import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/dataService';
import { Team } from '../common/team';
import { TeamdialogComponent } from '../teamdialog/teamdialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
 
  teams: Team[];
  isLoading = false;
  constructor(private dataService: DataService, public dialogref: MatDialog) { }

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

  dialogue()
  {
    this.dialogref.open(TeamdialogComponent, {
      width:'600px'
      // data:item
  });

  }
}
