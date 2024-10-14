import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  products = [
    { id: 1, name: 'Продукт 1', price: 100 },
    { id: 2, name: 'Продукт 2', price: 150 },
    { id: 3, name: 'Продукт 3', price: 200 },
  ];

  currency = 100;
}
