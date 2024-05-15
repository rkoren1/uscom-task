import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { Products } from './products.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Products;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    //added delay for demo purposes - to better highlight the product skeleton
    this.productsService
      .getProducts(10, 0)
      .pipe(delay(800))
      .subscribe((res) => {
        this.products = res;
        console.log(res);
      });
  }
}
