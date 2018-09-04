import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Applicant } from '../common/applicant';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { DataService } from '../common/dataService';
import { Team } from '../common/team';


@Component({
  selector: 'app-create-teams',
  templateUrl: './create-teams.component.html',
  styleUrls: ['./create-teams.component.css']
})
export class CreateTeamsComponent implements OnInit {

  // team: Team;
  applicants: Applicant[];
  displayedColumns = ['firstName', 'lastName', 'email', 'county', 'skills'];
  dataSource = new MatTableDataSource<Applicant>(this.applicants)
  selection = new SelectionModel<Applicant>(true, []);

  constructor(private router: Router, private dataService: DataService) {
    // this.team = new Team({
    //   teamID: '',
    //   // teamName: '',
    //   // members: {
    //   //   firstName: '',
    //   //   lastName: '',
    //   //   email: '',
    //   //   county: '',
    //   //   role: '',// drop down { leader, asst. leader, member }
    //   // }
    // });
  }

  ngOnInit() {
    this.dataService.getApplicantsList()
      .subscribe((data) => {
        this.applicants = data['data'];
        this.dataSource = new MatTableDataSource<Applicant>(this.applicants);
      });
  }

  onCreate(createTeam) {
    alert("Team created successfully");
    this.router.navigate(['/teams']);

  }
}
