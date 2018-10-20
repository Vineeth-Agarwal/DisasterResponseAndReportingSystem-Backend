import { Component, OnInit } from '@angular/core';
import { Applicant } from '../common/applicant';
import { Router } from '@angular/router';
import { DataService } from '../common/dataService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // variable for applicant
  applicant: Applicant;
  // for validation
  isSubmitted = false;
  incorrectPassword = false;

  constructor(private router: Router, public dataService: DataService) {
    this.applicant = new Applicant({
      email: ''
    });
  }

  ngOnInit() {
  }

  onLogin({ value, valid }: { value: Applicant, valid: boolean }) {
    console.log(value);
    console.log(valid);
    this.isSubmitted = true;
    if (value) {
      console.log(value);
      this.dataService.login(value)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['/dashboard']);
        }, (err) => {
          this.incorrectPassword = true;
          console.log('Wrong Email/Password');
        });
    } else {
      console.log("Enter Email and password Both");
    }
  }
}
