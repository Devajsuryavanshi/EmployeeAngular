import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/employees";
  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseUrl);
  }

  addEmployee(emp: Employee): Observable<Object>{
    return this.httpClient.post(this.baseUrl, emp);
  }

  getById(id:number): Observable<Employee>{
    return this.httpClient.get<Employee>(this.baseUrl + '/' + id);
  }

  updateEmployee(emp: Employee): Observable<Object>{
    return this.httpClient.put(this.baseUrl,emp);
  }

  deleteEmployee(id:number): Observable<Object>{
    return this.httpClient.delete(this.baseUrl+'/'+id);
  }
}
