import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/dataService';
import { Incident } from '../common/incident';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  incidents: Incident[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getIncidentsList()
      .subscribe((data) =>{
        this.incidents = data['data'];
      });
  }

}
