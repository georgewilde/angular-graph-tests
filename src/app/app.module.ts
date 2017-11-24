import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartModule } from 'angular2-highcharts';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GraphsComponent } from './graphs/graphs.component';
import { NgxChartsComponent } from './ngx-charts/ngx-charts.component';
import { HighchartsComponent } from './highcharts/highcharts.component';


@NgModule({
    declarations: [
        GraphsComponent,
        NgxChartsComponent,
        HighchartsComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgxChartsModule,
        ChartModule.forRoot(require('highcharts')),
    ],
    providers: [],
    bootstrap: [GraphsComponent],
})
export class AppModule {}
