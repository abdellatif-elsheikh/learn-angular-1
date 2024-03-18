import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'search-product',
  templateUrl: './search-product.component.html',
  styleUrl: './search-product.component.css'
})
export class SearchProductComponent {
  searchResult = ''

  @Output()
  searchValue: EventEmitter<string> = new EventEmitter<string>()

  @ViewChild('searchInput')
  searchInputElement: ElementRef

  onSubmitSearch = () => {

    this.searchResult = this.searchInputElement.nativeElement.value
    this.searchValue.emit(this.searchResult)
    
  }
}
