import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, Products } from './products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(take: number, skip: number) {
    return this.http.get<Products>('https://dummyjson.com/products', {
      params: { limit: take, skip },
    });
  }

  updateProduct(productId: number, productData: Partial<Product>) {
    return this.http.put<Product>(
      `https://dummyjson.com/products/${productId}`,
      JSON.stringify(productData)
    );
  }
}
