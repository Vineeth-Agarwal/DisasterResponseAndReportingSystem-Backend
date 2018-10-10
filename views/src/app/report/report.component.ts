import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { DataService } from '../common/dataService';
import { Report } from '../common/report';
import { Router } from '@angular/router';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  reports: Report[];
  displayedColumns: string[] = ['incidentName', 'reportedBy', 'structuralDamage', 'fire', 'utilities'];
  dataSource = new MatTableDataSource<Report>(this.reports);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private router: Router, private dataService: DataService) {

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource<Report>(this.reports);
   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataService.getReportsList()
      .subscribe((data) => {
        this.reports = data['data'];
        this.dataSource = new MatTableDataSource<Report>(this.reports);
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
