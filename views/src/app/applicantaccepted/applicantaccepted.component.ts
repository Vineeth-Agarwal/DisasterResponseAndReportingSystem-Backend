import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DataService } from '../common/dataService';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../common/user';
import { MyDialogComponentComponent } from '../my-dialog-component/my-dialog-component.component';

@Component({
  selector: 'app-applicantaccepted',
  templateUrl: './applicantaccepted.component.html',
  styleUrls: ['./applicantaccepted.component.css']
})
export class ApplicantacceptedComponent implements OnInit {
  applicant: User;
  applicant_name:String;
  constructor(private dataService: DataService,public ref: MatDialog,public thisDialogRef: MatDialogRef<MyDialogComponentComponent>, @Inject(MAT_DIALOG_DATA) public data: User) { }

  ngOnInit() {
    this.applicant = this.data;
    this.applicant_name=this.applicant.firstName;
    console.log("applicant is "+ this.applicant.email)
    console.log("applicant is "+ this.applicant.firstName)
    // this.dataService.getApplicantsList()
    //   .subscribe((data) => {
    //     this.applicant = data['data'];
    //     this.applicant_id=this.applicant.email;
    //   });

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
