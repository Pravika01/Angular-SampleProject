import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
title="Task";

name:string='Prajakta';
date1=new Date("1997-08-17")
otp:number=0;

verify(){
  this.otp=this.otp
}
}
