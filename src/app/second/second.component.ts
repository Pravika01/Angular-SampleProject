import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  message1:string="Welcome to the Velocity";
  annualSalary:number = 45000;
  totalPrice:number=3412.1234;

  todaysDate = new Date();

}
