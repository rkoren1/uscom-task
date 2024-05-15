import { FormControl } from '@angular/forms';

export interface EditProductForm {
  productId: FormControl<number>;
  quantity: FormControl<number>;
  productName: FormControl<string>;
  productDescription: FormControl<string>;
}

export interface EditProductFormValue {
  productId: number;
  quantity: number;
  productName: string;
  productDescription: string;
}
