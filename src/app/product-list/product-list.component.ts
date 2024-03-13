import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  // name = 'Ahmed';
  phoneInfo = {
    image: '/assets/images/download.jpeg',
    name: 'iphone',
    price: 999,
    color: `blue`,
    discount: 0.7,
    inStock: 10,
  };

  calcDiscount = () => {
    return this.phoneInfo.price * this.phoneInfo.discount;
  };
  isAvailable = (): boolean | undefined => {
    if (this.phoneInfo.inStock >= 1) {
      return false;
    } else {
      return true;
    }
  };

  addToCart = 0

  incrementPurchases = () => {
    if (this.addToCart < this.phoneInfo.inStock) {
      this.addToCart++
    }
  }

  decrementPurchases = () => {
    if(this.addToCart > 0) {
      this.addToCart--
    }
  }

  // changeName = (newName:any) => {
  //   this.name = newName.target.value;
  //   console.log(newName);
    
  // };
}
