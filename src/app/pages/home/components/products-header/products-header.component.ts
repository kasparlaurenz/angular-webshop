import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-products-header',
    templateUrl: './products-header.component.html',
})
export class ProductsHeaderComponent {
    @Output() columnsCountChange = new EventEmitter<number>();
    sort = 'desc';
    itemsToShow = 12;

    constructor() {}

    onSortChange(sort: string) {
        this.sort = sort;
    }

    onItemsToShowChange(itemsToShow: number) {
        this.itemsToShow = itemsToShow;
    }

    onColumnsChange(columns: number) {
        this.columnsCountChange.emit(columns);
    }
}
