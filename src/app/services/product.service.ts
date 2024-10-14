import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    { id: 1, name: 'Laptop', description: 'High-performance laptop', price: 1500, imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Phone', description: 'Latest smartphone', price: 800, imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Headphones', description: 'Noise-cancelling headphones', price: 200, imageUrl: 'https://via.placeholder.com/150' }
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
