import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/dataService';
import { Team } from '../common/team';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TeamdialogComponent } from '../teamdialog/teamdialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  id = { _id: String };
  teams: Team[];
  incidentID:string;
  isLoading = false;
  constructor(public route: ActivatedRoute,
    private router: Router, 
    private dataService: DataService,
    public dialogref: MatDialog) {
  }

  ngOnInit() {
    this.dataService.getTeamList()
      .subscribe((data) => {
        this.teams = data['data'];
        this.isLoading = false;
      });

    // // this.incidentReportClicked=this.r.get("data")
    // this.route.paramMap.subscribe((paramMap: ParamMap) => {
    //   this.incidentID = paramMap.get('item.incidentID');
    //   console.log("value of incidentID is "+this.incidentID);
    // })
    // // this.dataSource.paginator = this.paginator;
    // // this.dataSource.sort = this.sort;
    // // this.dataService.getReportsList()
    // this.dataService.getTeamsById(this.incidentID)
    //   .subscribe((data) => {
    //     this.teams = data['data'];
    //   });
  }

  onClick(item){
    console.log(item._id);
  }

  delete(item){
    this.id = { _id: item._id };
    console.log(this.id);
    this.dataService.deleteTeam(this.id)
      .subscribe((data) => {
        this.dataService.getTeamList()
        .subscribe((dataT) => {
        this.teams = dataT['data'];
        this.isLoading = false;
      });
      item.isActive = false;
      console.log('success');
    },
      error => {
        console.log('Error Occured');
      });
  }

  dialogue()
  {
    this.dialogref.open(TeamdialogComponent, {
      width:'600px'
      // data:item
  });

  }
}
