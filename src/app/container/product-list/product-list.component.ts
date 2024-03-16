import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: 'iphone1',
      image: 'assets/images/iphone1.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fuga a, ipsa veniam assumenda voluptates non ipsam!',
      category: 'ios',
      price: 350,
      isAvailable: true,
      discount: 0.5,
    },
    {
      id: 2,
      name: 'iphone2',
      image: 'assets/images/iphone2.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fuga a, ipsa veniam assumenda voluptates non ipsam!',
      category: 'ios',
      price: 370,
      isAvailable: false,
      discount: 0.7,
    },
    {
      id: 3,
      name: 'iphone3',
      image: 'assets/images/iphone3.jpeg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fuga a, ipsa veniam assumenda voluptates non ipsam!',
      category: 'ios',
      price: 560,
      isAvailable: false,
    },
    {
      id: 4,
      name: 'iphone4',
      image: 'assets/images/iphone4.jpeg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fuga a, ipsa veniam assumenda voluptates non ipsam!',
      category: 'ios',
      price: 570,
      isAvailable: true,
    },
    {
      id: 5,
      name: 'iphone5',
      image: 'assets/images/iphone5.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fuga a, ipsa veniam assumenda voluptates non ipsam!',
      category: 'ios',
      price: 800,
      isAvailable: true,
      discount: 0.6,
    },
    {
      id: 6,
      name: 'iphone6',
      image: 'assets/images/iphone6.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fuga a, ipsa veniam assumenda voluptates non ipsam!',
      category: 'ios',
      price: 950,
      isAvailable: false,
    },
    {
      id: 7,
      name: 'samsung a50',
      image: 'assets/images/samsung-a50.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fuga a, ipsa veniam assumenda voluptates non ipsam!',
      category: 'android',
      price: 450,
      isAvailable: true,
    },
    {
      id: 8,
      name: 'oppo a8',
      image: 'assets/images/oppo-a8.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fuga a, ipsa veniam assumenda voluptates non ipsam!',
      category: 'android',
      price: 370,
      isAvailable: true,
      discount: 0.5,
    },
    {
      id: 9,
      name: 'xaomi',
      image: 'assets/images/xaomi.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fuga a, ipsa veniam assumenda voluptates non ipsam!',
      category: 'android',
      price: 820,
      isAvailable: true,
    },
    {
      id: 10,
      name: 'nokia',
      image: 'assets/images/nokia.jpeg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fuga a, ipsa veniam assumenda voluptates non ipsam!',
      category: 'windows',
      price: 790,
      isAvailable: false,
      discount: 0.4,
    },
    {
      id: 11,
      name: 'huawei',
      image: 'assets/images/huawei.jpeg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fuga a, ipsa veniam assumenda voluptates non ipsam!',
      category: 'android',
      price: 910,
      isAvailable: true,
    },
  ];

  totalProducts = this.products.length;

  totalProductsInStock = this.products.filter((prod) => prod.isAvailable)
    .length;

  totalProductsOutStock = this.products.filter(
    (prod) => prod.isAvailable === false
  ).length;

  selectedFilter: string = 'all';

  filterChanged = (filterValue) => {
    this.selectedFilter = filterValue;
  };
}
