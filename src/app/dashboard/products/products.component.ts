import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { delay, tap } from 'rxjs';
import { Products } from './products.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Products | undefined;
  pageSize = 10;
  pageIndex = 0;
  totalCount: number;

  constructor(private productsService: ProductsService) {}

  handlePageChange(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.productsService
      .getProducts(this.pageSize, this.pageIndex * this.pageSize)
      .pipe(
        tap(() => {
          //we make products undefined so the skeleton shows
          this.products = undefined;
        }),
        //added delay for demo purposes - to better highlight the product skeleton
        delay(800)
      )
      .subscribe((res) => {
        this.products = res;
        this.totalCount = res.total;
      });
  }

  ngOnInit() {
    this.productsService
      .getProducts(this.pageSize, this.pageIndex * this.pageSize)
      //added delay for demo purposes - to better highlight the product skeleton
      .pipe(delay(800))
      .subscribe((res) => {
        this.products = res;
        this.totalCount = res.total;
      });
  }
}
