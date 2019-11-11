import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../sevices/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public getProducts:Array<any>=[];

  constructor(public _productsService: ProductsService,private router:Router) { }

  ngOnInit() {
    this.getProducts = this._productsService.returnProducts();
    console.log(this.getProducts);
    
  }

  public SendInfo(productId){
    console.log(productId);
    this.router.navigate(['productInformation', productId])
    
  }

}
