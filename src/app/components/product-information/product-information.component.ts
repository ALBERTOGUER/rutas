import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/sevices/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css']
})
export class ProductInformationComponent implements OnInit {

  public productoFiltrado:any = [];
  public descuento:number=0;

  constructor( private _ProductService: ProductsService, private activatedroute: ActivatedRoute) { 

    const idproducturl = this.activatedroute.snapshot.paramMap.get('id');

  this.productoFiltrado = this._ProductService.getproduct(idproducturl);
  console.log(this.productoFiltrado);

   this.descuento = this.productoFiltrado.price - (this.productoFiltrado.price * .1);
  console.log(this.descuento);
  
  
  }

  ngOnInit() {
  }

  public sizewidth(raiting){
    let porcentaje=(raiting*100)/5
    return `${porcentaje}%`
  }

  

}
