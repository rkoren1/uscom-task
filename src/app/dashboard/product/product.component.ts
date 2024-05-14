import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../products/products.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input({ required: true }) product: Product;

  constructor() {}

  ngOnInit() {}
}
