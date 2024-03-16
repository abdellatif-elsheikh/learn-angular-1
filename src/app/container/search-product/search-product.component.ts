import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search-product',
  templateUrl: './search-product.component.html',
  styleUrl: './search-product.component.css'
})
export class SearchProductComponent {
  searchResult = ''

  @Output()
  searchValue: EventEmitter<string> = new EventEmitter<string>()
  onSearch = () => {
    this.searchValue.emit(this.searchResult)
  }
}
