import { Component, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
})
export class FiltersComponent {
    @Output() categoryChange = new EventEmitter<{
        value: string;
        isSelected: boolean;
    }>();
    @Output() selectAll = new EventEmitter<
        { value: string; isSelected: boolean }[]
    >();

    categories = [
        { value: 'shoes', isSelected: false },
        { value: 'clothes', isSelected: false },
    ];

    constructor() {}

    onCategoryChange(category: { value: string; isSelected: boolean }) {
        this.categoryChange.emit(category);
    }

    onSelectAll() {
        const allSelected = this.categories.every(c => c.isSelected);
        if (allSelected) {
            this.categories = this.categories.map(c => ({
                ...c,
                isSelected: false,
            }));
        } else {
            this.categories = this.categories.map(c => ({
                ...c,
                isSelected: true,
            }));
        }
        this.selectAll.emit(this.categories);
    }
}
