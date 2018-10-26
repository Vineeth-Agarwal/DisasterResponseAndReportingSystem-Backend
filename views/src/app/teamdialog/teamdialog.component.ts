import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CreateTeamsComponent } from '../create-teams/create-teams.component';

@Component({
  selector: 'app-teamdialog',
  templateUrl: './teamdialog.component.html',
  styleUrls: ['./teamdialog.component.css']
})
export class TeamdialogComponent implements OnInit {

  constructor(public dialog: MatDialog, public ref: MatDialog,@Inject(MAT_DIALOG_DATA) public thisMatDialogRef: MatDialogRef<TeamdialogComponent>) { }

  ngOnInit() {
  }

  yes()
  {
    this.ref.closeAll();
    // this.ref.open('CreateTeamsComponent');
    
   
  // let dialogReff=this.dialog.open(CreateTeamsComponent,{
    // width:'600px',
    // data:this.user

  // });
  // dialogReff.afterClosed().subscribe(result=>{
    // console.log('Dialog closed: ${result}');
    // this.dialogResult=result;
  // })
}

  no()
  {
    this.ref.closeAll();
  }

}
