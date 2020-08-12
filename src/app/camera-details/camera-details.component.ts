import { Component, OnInit } from '@angular/core';
import { ICamera } from '../_models/ICamera';
import { CameraServiceService } from '../_services/camera-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-camera-details',
  templateUrl: './camera-details.component.html',
  styleUrls: ['./camera-details.component.css']
})
export class CameraDetailsComponent implements OnInit {

  camera: ICamera;
  cameras$: Observable<any>;
  cameraUrl: string;

  constructor(private cameraService: CameraServiceService,
              private route: ActivatedRoute,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit() {
    /* tslint:disable:no-string-literal */
    // this.route.queryParams.subscribe(params => {
    //   this.camera.id = params['id'];
    //   console.log(this.camera.id);
    // });
    /* tslint:disable:no-string-literal */

    // this.cameraId = this.route.parent.snapshot.url[0].path;

     // this.loadCameraById();

    this.route.data.subscribe(data => {
      this.camera = data['camera'];
    });

    // console.log('camera id below');

    // this.route.data.subscribe(data => {
    //   this.cameraId = data['id'];
    // });

    // console.log(this.camera.id);

  }

  loadCameraById() {
    this.cameraService.getCameraById(this.route.snapshot.paramMap['id']).subscribe((camera: ICamera) => {
      this.camera = camera;
    }, error => {
      console.log(error);
      this.toastr.error('Please select a camera to view');
      this.router.navigateByUrl('/cameras-list');
    });
  }



}
