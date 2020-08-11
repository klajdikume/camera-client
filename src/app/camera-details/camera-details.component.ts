import { Component, OnInit } from '@angular/core';
import { ICamera } from '../_models/ICamera';
import { CameraServiceService } from '../_services/camera-service.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-camera-details',
  templateUrl: './camera-details.component.html',
  styleUrls: ['./camera-details.component.css']
})
export class CameraDetailsComponent implements OnInit {

  camera: ICamera;

  constructor(private cameraService: CameraServiceService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams
      .subscribe((queryParams: Params) => {
        this.camera.id = queryParams['id'];
        console.log(this.camera.id);


      });
  }



}
