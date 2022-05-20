import {Component, Input} from '@angular/core';

import {Employee} from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  @Input() employee: Employee;
  //add a new field that collects the employees reporting to this person, directly and indirectly & display the **total** number of these employees in the header of the card.


  i: number = 0;

  constructor() {
    this.employees.directReports = [
    //constructor info goes here
    ];

    //collect the directReports Array
    for(let i = 0; i < this.employees.directReports.length; i++) {
      //collect all employees
      for(let j = 0; j < this.employees.length; j++) {
        //add an indirectReports field of all the sub reporters
        if(this.employees.directReports[i] == this.employees[j].name) {
          this.employees[i].indirectReports = this.employees[j].directReports;
        }
      }
    }
  }
}
