import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent {
  isShow:boolean = true ;
  isDisplay:boolean = false ;

  contactPreference:string="Mobile";
  
  toggle(){
      this.isDisplay = !this.isDisplay;
  }
  selectedDay:string="";
  coursesList:string[]=['Angular','Java','Software Testing','DevOps AWS']

  
  weekdays:string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  
  

}
