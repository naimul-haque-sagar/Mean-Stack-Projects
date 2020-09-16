import { Injectable } from '@angular/core';
import {Employee} from '../model/employee-model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  singleEmployee:Employee;
  employees:Employee[];

  baseURL = 'http://localhost:8000/employees';

  constructor(private http: HttpClient) { }

  postEmployee(emp: Employee) {
    return this.http.post(this.baseURL, emp);
  }

  getEmployeeList() {
    return this.http.get(this.baseURL);
  }
}
