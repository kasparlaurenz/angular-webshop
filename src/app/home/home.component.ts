import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent {
    columnsCount = 3;
    selectedCatergories: string[] = [];
    constructor() {}

    onColumnsCountChange(count: number) {
        this.columnsCount = count;
    }

    onCategoryChange(category: { value: string; isSelected: boolean }) {
        if (this.selectedCatergories.includes(category.value)) {
            this.selectedCatergories = this.selectedCatergories.filter(
                c => c !== category.value
            );
        } else {
            this.selectedCatergories = [
                ...this.selectedCatergories,
                category.value,
            ];
        }
    }

    onSelectAll(categories: { value: string; isSelected: boolean }[]) {
        this.selectedCatergories = categories
            .filter(c => c.isSelected)
            .map(c => c.value);
    }
}
