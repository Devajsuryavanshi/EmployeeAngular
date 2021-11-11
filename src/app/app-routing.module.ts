import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component'
import {AddEmployeeComponent} from './add-employee/add-employee.component'
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './LoginService/AuthGuard/auth.guard';

const routes: Routes = [
  {path:'employees', component:EmployeeListComponent, canActivate:[AuthGuard]},
  {path:'add-employee',component:AddEmployeeComponent, canActivate:[AuthGuard]},
  {path:'update/:id', component:AddEmployeeComponent, canActivate:[AuthGuard]},
  {path:'', component:LoginComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
