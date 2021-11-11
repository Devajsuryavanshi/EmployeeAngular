import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/sign-in-data';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router) { }

  mockUser: SignInData = new SignInData("Anuj", "12345");
  isAuthenticated!: boolean;

  authenticate(data: SignInData){
    if(this.checkDetails(data)){
      this.isAuthenticated = true;
      this.router.navigate(['employees']);
      return true;
    }
    else{
      this.isAuthenticated = false;
      return false;
    }
  }

  checkDetails(data: SignInData){
    if(data.getUserName() == this.mockUser.getUserName() && 
      data.getPassword() == this.mockUser.getPassword()){
        return true;
      }
    else{
      return false;
    }
  }
}
