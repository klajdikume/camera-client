import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

import { CameraServiceService } from '../_services/camera-service.service';
import { ICamera } from '../_models/ICamera';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cameras-chart',
  templateUrl: './cameras-chart.component.html',
  styleUrls: ['./cameras-chart.component.css']
})
export class CamerasChartComponent implements OnInit {

  data: ICamera[];
  resolutions = [];
  resolutionsForLabel = [];
  numberOfResolution: number;

  // PolarArea
  // public polarAreaChartLabels: Array<any> = new Array();
  public polarAreaChartLabels: any[] = [];

  public polarAreaChartData: number[] = [];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';

  constructor(private camerasService: CameraServiceService) { }

  ngOnInit() {
    this.loadCamerasLabel();
  }


  loadCamerasLabel() {
    this.camerasService.getCameras().subscribe(data => {
      this.data = data;
      this.resolutions = this.data.map(r => r.resolution);

      // tslint:disable-next-line: no-shadowed-variable
      const res = this.resolutions.filter((x, i, a) => a.indexOf(x) === i); // marre rezolucionet pa perseritje

      console.log(res);

      this.polarAreaChartLabels.push(res);

      res.forEach((r) => {
        // tslint:disable-next-line: variable-name

        console.log(r);

        this.camerasService.getNumberOfCamerasWithAResolution(r).subscribe(number => {
           this.numberOfResolution = number;
           this.polarAreaChartData.push(this.numberOfResolution);
        });

      });

    });
  }


  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
