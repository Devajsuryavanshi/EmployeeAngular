import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  url: string = "";
  id: number = 0;
  adding = true;

  constructor(private service: EmployeeService, private router: Router,
    private actRoute: ActivatedRoute) {
     }

  ngOnInit(): void {
    if(this.actRoute.snapshot.params['id'] == null){
      this.adding = true;
    }
    else{
      this.id = this.actRoute.snapshot.params['id'];
      this.adding = false;
      this.updateEmployee(this.id);
    }
  }

  saveEmployee(){
    this.service.addEmployee(this.employee).subscribe(data=>{
      console.log(data);
    }),
      (error: any) => console.error(error);
  }

  saveUpdated(){
    this.service.updateEmployee(this.employee).subscribe(data=>{
      console.log(data);
    }),
    (error:any) => console.error(error);
  }

  submitEmployee(){
    let clear = document.getElementsByClassName('resetButton')[0] as HTMLElement;
    if(this.adding == true)
        this.saveEmployee();
    else
        this.saveUpdated();
    clear.click();
    this.router.navigate(['employees']);
  }

  updateEmployee(id: number){
    this.service.getById(id).subscribe(data => {
      this.employee = data;
    });
  }

}
