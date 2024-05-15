import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../products.model';
import { EditProductDialogComponent } from './edit-product-dialog/edit-product-dialog.component';
import { EditProductFormValue } from './edit-product-dialog/edit-product-form.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input({ required: true }) product: Product;

  openEditProductDialog() {
    const dialogRef = this.dialog.open(EditProductDialogComponent, {
      data: this.product,
    });

    dialogRef.afterClosed().subscribe((result: EditProductFormValue) => {
      //update product
      this.product.title = result.productName;
      this.product.description = result.productDescription;
      this.product.stock = result.quantity;
    });
  }

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
}
