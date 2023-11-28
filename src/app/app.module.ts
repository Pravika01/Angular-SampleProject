import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from './first/first.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TaskComponent } from './task/task.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourComponent } from './four/four.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

import { MyCustomDirective } from './directives/my-custom.directive';
import { DynamicStyleDirective } from './directives/dynamic-style.directive'; 


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DataBindingComponent,
    TaskComponent,
    EventBindingComponent,
    SecondComponent,
    ThirdComponent,
    FourComponent,
    DirectiveExampleComponent,
    ProductComponent,
    ProductListComponent,
    
    MyCustomDirective,
         DynamicStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
