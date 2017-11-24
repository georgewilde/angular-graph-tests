import { Component, ViewEncapsulation } from '@angular/core';
import { categories, hourlyValues, similarHomes } from './data';

@Component({
    selector: 'app-highcharts',
    templateUrl: './highcharts.component.html',
    styleUrls: ['./highcharts.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class HighchartsComponent {
    public donutOptions: Object;
    public horizontalStackedBarOptions: Object;
    public similarHomesOptions: Object;

    constructor() {
        this.donutOptions = {
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
                name: 'Categories',
                colorByPoint: true,
                data: categories,
                innerSize: '57%',
            }],
            credits: {
                enabled: false
            },
        };

        this.horizontalStackedBarOptions = {
            chart: {
                type: 'bar',
            },
            title: {
                text: null,
            },
            xAxis: {
                type: 'datetime',
                tickInterval: 1,
            },
            yAxis: {
                min: 0,
                title: {
                    text: null,
                }
            },
            colors: [
                '#ea1c0a',
                '#1ea2b1',
            ],
            legend: {
                reversed: true,
            },
            plotOptions: {
                series: {
                    stacking: 'normal',
                    pointStart: Date.UTC(2017, 11, 24),
                    pointInterval: 60 * 60 * 1000,
                }
            },
            series: hourlyValues,
            credits: {
                enabled: false
            },
        };

        this.similarHomesOptions = {
            title: {
                text: null
            },
            yAxis: {
                title: {
                    text: null
                }
            },
            colors: [
                '#ea1c0a',
                '#e3e000',
            ],
            xAxis: {
                type: 'datetime',
                // units: [['month', [1]]],
                dateTimeLabelFormats: {
                    month: '%b'
                }
            },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: Date.UTC(2017, 0),
                    pointIntervalUnit: 'month'
                }
            },
            series: similarHomes,
        };
    }
}
