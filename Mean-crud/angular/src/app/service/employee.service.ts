import { Injectable } from '@angular/core';
import {Employee} from '../model/employee-model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = 'http://localhost:8000/employees';

  constructor(private httpClient: HttpClient) { }

  postEmployee(employee: Employee) {
    return this.httpClient.post(this.url, employee);
  }

  getEmployeeList() {
    return this.httpClient.get(this.url);
  }

  update(employee: Employee) {
    return this.httpClient.put(this.url + `/${employee._id}`, employee);
  }

  delete(_id: string) {
    return this.httpClient.delete(this.url + `/${_id}`);
  }
}
