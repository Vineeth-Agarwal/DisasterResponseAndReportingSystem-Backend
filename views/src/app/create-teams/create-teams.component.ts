import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Applicant } from '../common/applicant';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { DataService } from '../common/dataService';
import { Team } from '../common/team';

export interface Members {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-create-teams',
  templateUrl: './create-teams.component.html',
  styleUrls: ['./create-teams.component.css']
})
export class CreateTeamsComponent implements OnInit {

  // team: Team;
  applicants: Applicant[];
  //  displayedColumns = ['firstName', 'lastName', 'email', 'county', 'skills'];
  displayedColumns = ['select', 'firstName', 'lastName', 'email', 'dob', 'county', 'skills'];
  dataSource = new MatTableDataSource<Applicant>(this.applicants)
  selection = new SelectionModel<Applicant>(true, []);

  members: Members[] = [
    {value: 'Option1-0', viewValue: 'Option1'},
    {value: 'Option-1', viewValue: 'Option2'},
    {value: 'Option1-2', viewValue: 'Option3'}
  ];

   /** Whether the number of selected elements matches the total number of rows. */
   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

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
