import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-applicantaccepted',
  templateUrl: './applicantaccepted.component.html',
  styleUrls: ['./applicantaccepted.component.css']
})
export class ApplicantacceptedComponent implements OnInit {

  constructor(public ref: MatDialog) { }

  ngOnInit() {
  }
  onClick()
  {
    this.ref.closeAll();
    // let dialogRef=this.ref.open(ReviewApplicationComponent,{
    //   // width:'600px',
    //   // data:'hellooo',
    //   // duration: '2000'
      

    // });
    // // dialogRef.afterClosed().subscribe(result=>{
    // //   // console.log('Dialog closed: ${result}');
    // //   // this.dialogResult=result;
     
    // // })
      
  }

}
