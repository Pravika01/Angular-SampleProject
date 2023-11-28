import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {


  productList:any = [
    {productName:"iphone 13",price:45000,quantity:1},
    {productName:"one plus",price:35000,quantity:1},
    {productName:"table",price:5000,quantity:5},
    {productName:"TV",price:45000,quantity:2},
 ]


}
