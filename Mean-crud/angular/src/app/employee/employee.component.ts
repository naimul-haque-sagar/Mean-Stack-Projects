import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../model/employee-model';
import {EmployeeService} from '../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  singleEmployee:Employee;
  employees:Employee[];

  constructor(public service:EmployeeService) { }

  ngOnInit() {
    this.resetForm();
    this.resetList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.singleEmployee = {
      _id: "",
      name: "",
      position: "",
      office: "",
      salary: null
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.service.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.resetList();
      });
    }else{
      this.service.update(form.value).subscribe((res) => {
        this.resetForm(form);
        this.resetList();
      });
    }
  }

  resetList() {
    this.service.getEmployeeList().subscribe((res) => {
      this.employees = res as Employee[];
    });
  }

  update(emp: Employee) {
    this.singleEmployee = emp;
  }

  delete(_id: string, form: NgForm) {
    if (confirm('Deleting record ?') == true) {
      this.service.delete(_id).subscribe((res) => {
        this.resetList();
        this.resetForm(form);
      });
    }
  }

}
