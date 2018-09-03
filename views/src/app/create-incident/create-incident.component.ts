import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Incident } from '../common/incident';
import { DataService } from '../common/dataService';

@Component({
  selector: 'app-create-incident',
  templateUrl: './create-incident.component.html',
  styleUrls: ['./create-incident.component.css']
})
export class CreateIncidentComponent implements OnInit {

  incident: Incident;
  date = new Date;
  constructor(private router: Router, private dataService: DataService) {
    this.incident = new Incident({
      incidentID: '',
      incidentName: '',
      location: '',
      date: this.date,
      time: this.date,
      description: '',
    });
  }

  ngOnInit() {
  }

  onCreate({ value, valid }: { value: Incident, valid: boolean }) {
    // alert("Incident module created successfully");
    // this.router.navigate(['/dashboard']);
    this.incident = value;
    console.log(this.incident);
    // make http req. only if form is valid
    if (valid) {
      this.dataService.saveIncident(this.incident)
        .subscribe((data) => {
          console.log(data)
          console.log("success")
          // this.router.navigate(['/users'])
        },
          error => {
            console.log("Error Occured")
          });
    }
  }
}
