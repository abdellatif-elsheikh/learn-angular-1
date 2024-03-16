import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outStock: number = 0;

  @Output()
  selectedFilterChanged: EventEmitter<string> = new EventEmitter<string>()

  selectedFilter:string = 'all'

  onSelectedFilterChange = () => {
    this.selectedFilterChanged.emit(this.selectedFilter);
    
  }
}
