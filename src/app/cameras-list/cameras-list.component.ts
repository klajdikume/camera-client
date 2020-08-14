import { Component, OnInit } from '@angular/core';
import { ICamera } from '../_models/ICamera';
import { CameraServiceService } from '../_services/camera-service.service';
import { ToastrService } from 'ngx-toastr';
import { DialogServiceService } from '../_services/dialog-service.service';

@Component({
  selector: 'app-cameras-list',
  templateUrl: './cameras-list.component.html',
  styleUrls: ['./cameras-list.component.css']
})
export class CamerasListComponent implements OnInit {

  cameras: ICamera[];

  constructor(private cameraService: CameraServiceService, private toastr: ToastrService,
              private dialog: DialogServiceService) { }

  ngOnInit() {
    this.getCameras();
  }

  getCameras() {
    this.cameraService.getCameras().subscribe(response => {
      this.cameras = response;
      console.log(this.cameras);
    });
  }

  deleteCamera(id: string, ip: string) {

    this.dialog.openConfirmDialog('Are you sure you want to delete camera with ip address: ' + ip)
    .afterClosed().subscribe(res => {
      if (res) {
        this.cameraService.deleteCameraById(id).subscribe(() => {
          this.toastr.success('Camera deleted succesfully!');
          this.getCameras();
        },
        error => {
          console.log(error);
          this.toastr.error('Camera was not deleted!');
        });
      }
    });

  }

}
