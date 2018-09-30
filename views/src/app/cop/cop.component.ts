import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cop',
  templateUrl: './cop.component.html',
  styleUrls: ['./cop.component.css']
})
export class COPComponent implements OnInit {
  
  zoom:number=9 ;
  lat: number = 51.678418;
  lng: number = 7.809007;
  // Markers
  markers:marker[]=[
    {
      name: 'Report1',
      deceased:0,
      immediate:2,
      delayed:3,
      minor:10,
      lat:40.349841283655195,
      lng:-94.8827696546299
      // ,draggable=true
    },
    {
      name: 'Report2',
      deceased:0,
      immediate:2,
      delayed:3,
      minor:10,      
      lat:40.549841283655195,
      lng:-94.6827696546299
    },
    {
      name: 'Report3',
      deceased:0,
      immediate:2,
      delayed:3,
      minor:10,
      lat:40.549841283655195,
      lng:-94.4827696546299
    },

    {
      name: 'Report4',
      deceased:0,
      immediate:2,
      delayed:3,
      minor:10,
      lat:40.249841283655195,
      lng:-94.9827696546299
    },

    {
      name: 'Report5',
      deceased:0,
      immediate:2,
      delayed:3,
      minor:10,
      lat:40.249841283655195,
      lng:-94.2827696546299
    }


  ]

constructor(){

}

ngOnInit() {
}


}
// Marker Type
interface marker{
  name?:string;
  deceased:number;
  immediate:number;
  delayed:number;
  minor:number;
  lat:number;
  lng:number
  // ;
  // draggable:boolean
  
}
