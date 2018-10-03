import { Component, OnInit } from '@angular/core';
// import { applicant } from '../common/mock-applicants';

export interface PeriodicElement {
  firstName: string;
  lastName: string;
  Email: string;
  County: string;
  Skills: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {firstName: 'Jim', lastName: 'Williams', Email: 'WilliamsJ@gmail.com', County: 'Nodway', Skills: 'CERT Firefighter'},
  {firstName: 'Jules', lastName: 'Verne', Email: 'Verne.J@Outlook.com', County: 'Vernon', Skills: 'CERT EMT-B'},
  {firstName: 'Kate', lastName: 'Tomlins', Email: 'Katet@gmail.com', County: 'Nodway', Skills: 'CERT'},
  {firstName: 'Amy', lastName: 'Yates', Email: 'Yates@yahoomail.com', County: 'Saint Louis', Skills: 'CERT LPN'},
  {firstName: 'David', lastName: 'Cameron', Email: 'David@gmail.com', County: 'Nodway', Skills: 'CERT'},
];

@Component({
  selector: 'app-team1-details',
  templateUrl: './team1-details.component.html',
  styleUrls: ['./team1-details.component.css']
})
export class Team1DetailsComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'county', 'skills'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
