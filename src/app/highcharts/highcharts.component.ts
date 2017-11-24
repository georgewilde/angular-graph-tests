import { Component, ViewEncapsulation } from '@angular/core';
import { categories } from './data';

@Component({
    selector: 'app-highcharts',
    templateUrl: './highcharts.component.html',
    styleUrls: ['./highcharts.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class HighchartsComponent {
    public options: Object;

    constructor() {
        this.options = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                width: 850,
                height: 400,
            },
            colors: [
                '#ea1c0a',
                '#b00402',
                '#c44341',
                '#1ea2b1',
                '#56b9c5',
                '#e3e000',
            ],
            title: {
                text: null,
            },
            tooltip: {
                enabled: false,
            },
            plotOptions: {
                pie: {
                    allowPointSelect: false,
                    cursor: 'auto',
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '<div class="labelPercent">{y}%</div><div class="labelText">{point.name}</div>',
                        style: {
                            color: 'black',
                        },
                        useHTML: true,
                        softConnector: false,
                        y: -20,
                        distance: 40,
                        padding: 0,
                    }
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: categories,
                innerSize: '57%',
            }]
        };
    }
}
