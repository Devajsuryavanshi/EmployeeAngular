import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import {EmployeeService} from '../employee.service'
import {AddEmployeeComponent} from '../add-employee/add-employee.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private service: EmployeeService,
    private router: Router) { }

  employees!: Employee[];

  private getEmployees(){
    this.service.getEmployeeList().subscribe(data =>{
      this.employees = data;
    })
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  updateEmp(id: number){
    this.router.navigate(['update',id]);
  }

  deleteEmp(id:number){
    this.service.deleteEmployee(id).subscribe(data =>{
      this.getEmployees();
    });
  }

}
