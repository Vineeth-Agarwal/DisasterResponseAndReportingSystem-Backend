import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
// import { DialogDemoComponent } from '../dialog-demo/dialog-demo.component';
import { MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../common/user';


@Component({
  selector: 'app-my-dialog-component',
  templateUrl: './my-dialog-component.component.html',
  styleUrls: ['./my-dialog-component.component.css']
})
export class MyDialogComponentComponent implements OnInit {

  user: User;
  constructor(public thisDialogRef: MatDialogRef<MyDialogComponentComponent>, @Inject(MAT_DIALOG_DATA) public data: User) { }

  ngOnInit() {
    this.user = this.data;
  }

  accept() {
   this.thisDialogRef.close('confirm');
  }

  deny() {
    this.thisDialogRef.close('deny');
  }
}
