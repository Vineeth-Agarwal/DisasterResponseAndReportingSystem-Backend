import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';


@Injectable()
export class AuthService {
  public message = "Incorrect Usename or Passsword";
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  constructor(
    private router: Router
  ) {}


  login(user: User){
    if (user.userName === 'Admin' && user.password === 'Admin' ) { // {3}
      this.loggedIn.next(true);
      this.router.navigate(['/dashboard']);
      console.log("Sucessfully logged in");
      alert("Sucessfully logged in")
    }
    else{
    console.log("Incorrect Usename or Passsword");
     alert(this.message);
    }
  }

  logout() {                            // {4}
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
