import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
// import { DialogDemoComponent } from '../dialog-demo/dialog-demo.component';
import { MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../common/user';
import { MatDialog} from '@angular/material';
import { ApplicantacceptedComponent } from '../applicantaccepted/applicantaccepted.component';
import { ApplicantdeniedComponent } from '../applicantdenied/applicantdenied.component';


@Component({
  selector: 'app-my-dialog-component',
  templateUrl: './my-dialog-component.component.html',
  styleUrls: ['./my-dialog-component.component.css']
})
export class MyDialogComponentComponent implements OnInit {
  dialogResult="";

  user: User;
  constructor(public dialog: MatDialog, public thisDialogRef: MatDialogRef<MyDialogComponentComponent>, @Inject(MAT_DIALOG_DATA) public data: User) { }

  ngOnInit() {
    this.user = this.data;
  }

  accept() {
    let dialogReff=this.dialog.open(ApplicantacceptedComponent,{
      width:'600px',
      data:this.user
  
    });
    dialogReff.afterClosed().subscribe(result=>{
      // console.log('Dialog closed: ${result}');
      this.dialogResult=result;
    })
  }

  

  deny() {
    let dialogReff=this.dialog.open(ApplicantdeniedComponent,{
      width:'600px',
      data:'hellooo'
  
    });
    dialogReff.afterClosed().subscribe(result=>{
      // console.log('Dialog closed: ${result}');
      this.dialogResult=result;
    })
  }
  
}
