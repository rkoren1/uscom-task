import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { delay, tap } from 'rxjs';
import { Product } from '../../products.model';
import { ProductsService } from '../../products.service';
import { EditProductForm } from './edit-product-form.model';

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.scss'],
})
export class EditProductDialogComponent implements OnInit {
  editProductForm: FormGroup<EditProductForm>;
  //boolean to enable loading state
  isApiLoading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private dialogRef: MatDialogRef<EditProductDialogComponent>,
    private _snackBar: MatSnackBar,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.editProductForm = new FormGroup<EditProductForm>({
      productId: new FormControl(this.data.id, {
        nonNullable: true,
      }),
      productName: new FormControl(this.data.title, {
        nonNullable: true,
      }),
      productDescription: new FormControl(this.data.description, {
        nonNullable: true,
      }),
      quantity: new FormControl(this.data.stock, {
        nonNullable: true,
      }),
    });
  }

  handleConfirmClick() {
    this.editProductForm.markAllAsTouched();
    if (!this.editProductForm.valid) {
      this._snackBar.open('Form is Invalid', undefined, { duration: 5000 });
    } else {
      this.productsService
        .updateProduct(
          this.data.id,
          this.editProductForm.value as Partial<Product>
        )
        .pipe(
          tap(() => {
            this.isApiLoading = true;
          }),
          //added delay so loader can be seen
          delay(800)
        )
        .subscribe((res) => {
          //we should validate response here and handle errors (show snackbar with the error)
          //but the api doesn't return any statuses or errors
          this.isApiLoading = false;
          this.dialogRef.close(this.editProductForm.value);
        });
    }
  }
}
