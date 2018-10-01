import { Component, OnInit } from '@angular/core';
import {Report} from '../common/report';
import { DataService } from '../common/dataService';

@Component({
  selector: 'app-cop',
  templateUrl: './cop.component.html',
  styleUrls: ['./cop.component.css']
})
export class COPComponent implements OnInit {
  lat:Number;
  lng:Number;
  reports: Report[];
  constructor(private dataService: DataService) { }

  ngOnInit() {  
    this.dataService.getReportsList()
      .subscribe((data) => {
        console.log(data)
        this.reports = data['data'];
        // console.log("reports is ", this.reports);
        // // this.lat=this.reports[0].location.lat;
        // // this.lng=this.reports[0].location.lng;        
        // console.log("reports 1 is ", this.reports[0]);
        // console.log("casualties is ", this.reports[0].casualties);
        // console.log("location is ", this.reports[0].location);
        // this.lat=40.349841283655195;
        // this.lng=-94.8827696546299;        

      });
      
  }
}

//   zoom:number=9 ;
//   lat=40.349841283655195;
//   lng=-94.8827696546299;
//   // Markers
//   markers:marker[]=[
//     {
//       name: 'Report1',
//       deceased:0,
//       immediate:2,
//       delayed:3,
//       minor:10,
//       lat:40.349841283655195,
//       lng:-94.8827696546299
//       // ,draggable=true
//     },
//     {
//       name: 'Report2',
//       deceased:0,
//       immediate:2,
//       delayed:3,
//       minor:10,      
//       lat:40.549841283655195,
//       lng:-94.6827696546299
//     },
//     {
//       name: 'Report3',
//       deceased:0,
//       immediate:2,
//       delayed:3,
//       minor:10,
//       lat:40.549841283655195,
//       lng:-94.4827696546299
//     },

//     {
//       name: 'Report4',
//       deceased:0,
//       immediate:2,
//       delayed:3,
//       minor:10,
//       lat:40.249841283655195,
//       lng:-94.9827696546299
//     },

//     {
//       name: 'Report5',
//       deceased:0,
//       immediate:2,
//       delayed:3,
//       minor:10,
//       lat:40.2y49841283655195,
//       lng:-94.2827696546299
//     }


//   ]

// constructor(){

// }

// ngOnInit() {
// }


// }
// // Marker Type
// interface marker{
//   name?:string;
//   deceased:number;
//   immediate:number;
//   delayed:number;
//   minor:number;
//   lat:number;
//   lng:number
//   // ;
//   // draggable:boolean
  
// }
