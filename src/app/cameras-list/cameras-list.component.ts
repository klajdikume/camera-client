import { Component, OnInit } from '@angular/core';
import { ICamera } from '../_models/ICamera';
import { CameraServiceService } from '../_services/camera-service.service';

@Component({
  selector: 'app-cameras-list',
  templateUrl: './cameras-list.component.html',
  styleUrls: ['./cameras-list.component.css']
})
export class CamerasListComponent implements OnInit {

  cameras: ICamera[];

  constructor(private cameraService: CameraServiceService) { }

  ngOnInit() {
    this.getCameras();
  }

  getCameras() {
    this.cameraService.getCameras().subscribe(response => {
      this.cameras = response;
      console.log(this.cameras);
    });
  }

}
