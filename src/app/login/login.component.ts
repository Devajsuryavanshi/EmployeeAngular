import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../LoginService/authenticate/authentication.service';
import { SignInData } from '../model/sign-in-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  isFormValid: boolean = true;
  isCredentialValid:boolean = true;

  ngOnInit(): void {
    console.log(this.authService.isAuthenticated);
    if(this.authService.isAuthenticated){
      this.router.navigate(['employees']);
    }
  }

  onSubmit(logInForm: NgForm){
    const data = new SignInData(logInForm.value.UserName,
       logInForm.value.Password);
       if(logInForm.value.UserName == '' || logInForm.value.Password ==''){
         this.isFormValid = false;
       }
    if(this.authService.authenticate(data) == false){
      this.isCredentialValid = false;
    }
  }

}
