import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../LoginService/authenticate/authentication.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  constructor(public auth:AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.isAuthenticated = false;
    this.router.navigate(['']);
  }

}
