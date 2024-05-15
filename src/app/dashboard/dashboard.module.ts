import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DemoFlexyModule } from '../demo-flexy-module';
import { DashboardComponent } from './dashboard.component';
import { ProductSkeletonComponent } from './products/product-skeleton/product-skeleton.component';
import { EditProductDialogComponent } from './products/product/edit-product-dialog/edit-product-dialog.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent,
    ProductsComponent,
    ProductSkeletonComponent,
    EditProductDialogComponent,
  ],
  imports: [
    CommonModule,
    DemoFlexyModule,
    FormsModule,
    NgApexchartsModule,
    ReactiveFormsModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
