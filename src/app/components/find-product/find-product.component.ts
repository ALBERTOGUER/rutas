import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../../sevices/products.service';

@Component({
  selector: 'app-find-product',
  templateUrl: './find-product.component.html',
  styleUrls: ['./find-product.component.css']
})
export class FindProductComponent implements OnInit {

  private termino: string = "";
  public productfilter: any = {};

  constructor(private ActivatedRoute: ActivatedRoute, private _producservice: ProductsService) {

    this.ActivatedRoute.params.subscribe((URL) => {
      console.log(URL);

      this.termino = URL.termino;

      this.productfilter = _producservice.compareproduct(this.termino);
      console.log(this.productfilter);


    });
  }

  ngOnInit() {
  }
  public sizewidth(raiting) {
    let porcentaje = (raiting * 100) / 5
    return `${porcentaje}%`
  }

}
