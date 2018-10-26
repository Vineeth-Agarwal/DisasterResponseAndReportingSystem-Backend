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

  a = Math.floor((Math.random() * 10000) + 1);
  team: Team;
  applicants: Applicant[];
  //  displayedColumns = ['firstName', 'lastName', 'email', 'county', 'skills'];
  displayedColumns = ['select', 'firstName', 'lastName', 'email', 'dob', 'county', 'skills'];
  dataSource = new MatTableDataSource<Applicant>(this.applicants)
  selection = new SelectionModel<Applicant>(true, []);

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
        this.dataSource.data.forEach(row => {
          this.selection.select(row); 
         // console.log(row);
        });
        // console.log(this.selection);
        
  }

  constructor(private router: Router, private dataService: DataService) {
    this.team = new Team({
      teamID: '',
      members: []
    });
  }

  ngOnInit() {
    this.dataService.getApplicantsList()
      .subscribe((data) => {
        this.applicants = data['data'];
        this.dataSource = new MatTableDataSource<Applicant>(this.applicants);
      });
  }

  onCreate({ value, valid }: { value: Team, valid: boolean }) {
    // alert("Incident module created successfully");
    // this.router.navigate(['/dashboard']);
    
    this.team.teamID = "Team"+this.a;
    this.team.members = this.selection.selected;
        
    console.log(this.team);
    // make http req. only if form is valid
    if (valid) {
      this.dataService.saveTeam(this.team)
        .subscribe((data) => {
          console.log(data);
          console.log('success');
          this.router.navigate(['/teamdialog']);
        },
          error => {
            console.log('Error Occured');
          });
    }
  }
}
