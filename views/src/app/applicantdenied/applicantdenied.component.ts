import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-applicantdenied',
  templateUrl: './applicantdenied.component.html',
  styleUrls: ['./applicantdenied.component.css']
})
export class ApplicantdeniedComponent implements OnInit {

  constructor(public variable:MatDialog) { }

  ngOnInit() {
  }
  onClickk()
  {
    this.variable.closeAll();

  }

}
