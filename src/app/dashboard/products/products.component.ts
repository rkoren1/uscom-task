import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, catchError, of, switchMap, tap } from 'rxjs';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, AfterViewInit {
  refreshProducts$ = new Subject<void>();
  pageSize = 10;
  pageIndex = 0;
  totalCount: number;

  getProducts$ = this.refreshProducts$.pipe(
    switchMap(() =>
      this.productsService
        .getProducts(this.pageSize, this.pageIndex * this.pageSize)
        .pipe(
          tap((prods) => {
            this.totalCount = prods.total;
          }),
          catchError(() => {
            this.snackBar.open('Failed to retrieve products', undefined, {
              duration: 10000,
            });
            // Return an empty observable or a default value to continue the stream
            return of({ products: [], total: 0 });
          })
        )
    )
  );

  constructor(
    private productsService: ProductsService,
    public snackBar: MatSnackBar
  ) {}

  ngAfterViewInit(): void {
    this.refreshProducts$.next();
  }

  handlePageChange(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.refreshProducts$.next();
  }

  ngOnInit() {}
}
