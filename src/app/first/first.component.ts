import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  firstName:string="Mike";

  companyName:string="Google";

  employeeObj:any = {
    employeeName:"John",
    designation:"Angular Developer",
    salary:40000,
    skills:["Angular","HTML"]
  }

  isBtnDisabled:boolean = true;
  imgPath:string="https://th.bing.com/th/id/OIP.u3mgmYMq4ofTd4lBtZtbxQHaD4?pid=ImgDet&rs=1"; 

  message1:string="Welcome to the Velocity";

}




