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
  isLoading = false;
  id = { _id: String };
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getIncidentsList()
      .subscribe((data) => {
        this.incidents = data['data'];
        this.isLoading = false;
      });
  }

  onArchive(item) {
    this.id = { _id: item._id };
    // console.log(this.id);
    this.dataService.archiveIncident(this.id)
      .subscribe((data) => {
        console.log(data);
        this.dataService.getIncidentsList()
        .subscribe((dataInci) => {
        this.incidents = dataInci['data'];
        this.isLoading = false;
      });
        item.isActive = false;
        console.log('success');
      },
        error => {
          console.log('Error Occured');
        });
  }

}
