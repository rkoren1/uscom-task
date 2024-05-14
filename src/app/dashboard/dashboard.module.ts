import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DemoFlexyModule } from '../demo-flexy-module';
import { DashboardComponent } from './dashboard.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [DashboardComponent, ProductComponent, ProductsComponent],
  imports: [CommonModule, DemoFlexyModule, FormsModule, NgApexchartsModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
