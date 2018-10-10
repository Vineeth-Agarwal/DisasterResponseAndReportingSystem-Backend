import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Report } from '../common/report';

@Component({
  selector: 'app-report-dialog',
  templateUrl: './report-dialog.component.html',
  styleUrls: ['./report-dialog.component.css']
})
export class ReportDialogComponent implements OnInit {

  report: Report;
  constructor(
    public thisDialogRef: MatDialogRef<ReportDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Report,
    public ref: MatDialog) { }

  ngOnInit() {
    this.report = this.data;
  }

  onOk() {
    this.ref.closeAll();
  }

}
