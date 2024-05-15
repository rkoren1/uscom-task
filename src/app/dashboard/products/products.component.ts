import { Component, OnInit } from '@angular/core';
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
    this.productsService.getProducts(10, 0).subscribe((res) => {
      this.products = res;
      console.log(res);
    });
  }
}
