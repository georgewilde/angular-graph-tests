import { Component } from '@angular/core';
import { categories } from './data';

@Component({
    selector: 'app-ngx-charts',
    templateUrl: './ngx-charts.component.html',
    styleUrls: ['./ngx-charts.component.css']
})
export class NgxChartsComponent {
    single: any[];

    view: any[] = [
        850,
        450
    ];
    showLegend = false;
    colorScheme = {
        domain: [
            '#ea1c0a',
            '#b00402',
            '#c44341',
            '#1ea2b1',
            '#56b9c5',
            '#e3e000',
        ]
    };
    showLabels = true;
    explodeSlices = false;
    doughnut = true;
    arcWidth = 0.4;
    tooltipDisabled = true;
    labelFormatting = (labelText) => {
        const value = categories.filter((category) => {
            return category.name === labelText;
        });

        return `${value[0].value}% ${labelText}`;
    }

    constructor() {
        Object.assign(this, {single: categories});
    }

    onSelect(event) {
        console.log(event);
    }
}
