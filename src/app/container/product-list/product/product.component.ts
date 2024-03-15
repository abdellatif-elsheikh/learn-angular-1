import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  product:{
    id: number,
    name: string,
    image: string,
    description: string,
    category: string,
    price: number,
    isAvailable: boolean,
    discount?: number
  }
}
