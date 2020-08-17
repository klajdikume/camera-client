import { Component, OnInit } from '@angular/core';
import { ICamera } from '../_models/ICamera';
import { CameraServiceService } from '../_services/camera-service.service';
import { ToastrService } from 'ngx-toastr';
import { DialogServiceService } from '../_services/dialog-service.service';
import { CameraParams } from '../_models/CameraParams';

@Component({
  selector: 'app-cameras-list',
  templateUrl: './cameras-list.component.html',
  styleUrls: ['./cameras-list.component.css']
})
export class CamerasListComponent implements OnInit {

  cameras: ICamera[];
  totalCount: number;
  pageSize: number;
  pageNumber: number;
  cameraParams = new CameraParams();

  constructor(private cameraService: CameraServiceService, private toastr: ToastrService,
              private dialog: DialogServiceService) { }

  ngOnInit() {
    // this.getCameras();
    this.getCamerasPaginated();
  }

  getCameras() {
    this.cameraService.getCameras().subscribe(response => {
      this.cameras = response;
      console.log(this.cameras);
    });
  }

  getCamerasPaginated() {
    this.cameraService.getPagedCameras(this.cameraParams).subscribe(response => {


      this.cameras = response.content;
      this.cameraParams.pageNumber = response.pageable.pageNumber;
      this.cameraParams.pageSize = response.pageable.pageSize;
      this.totalCount = response.totalElements;

      console.log(this.cameraParams.pageNumber + ' ' + this.totalCount + + ' ' + this.cameras);

    });
  }

  onPageChanged(event: any) {

    console.log(event);

    this.cameraParams.pageNumber = event.page;
    this.cameraParams.pageNumber = this.cameraParams.pageNumber - 1;
    this.getCamerasPaginated();
  }

  deleteCamera(id: string, ip: string) {

    this.dialog.openConfirmDialog('Are you sure you want to delete camera with ip address: ' + ip)
    .afterClosed().subscribe(res => {
      if (res) {
        this.cameraService.deleteCameraById(id).subscribe(() => {
          this.toastr.success('Camera deleted succesfully!');
          // this.getCameras();
          this.getCamerasPaginated();
        },
        error => {
          console.log(error);
          this.toastr.error('Camera was not deleted!');
        });
      }
    });

  }

}
