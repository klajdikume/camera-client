import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AsyncValidatorFn } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CameraServiceService } from '../_services/camera-service.service';
import { Router } from '@angular/router';
import { timer, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-camera-add',
  templateUrl: './camera-add.component.html',
  styleUrls: ['./camera-add.component.css']
})
export class CameraAddComponent implements OnInit {
  cameraAddForm: FormGroup;

  constructor(
    private cameraService: CameraServiceService,
    private router: Router,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.createAddCameraForm();
  }

  createAddCameraForm() {
    this.cameraAddForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      model: new FormControl('', [Validators.required]),
      resolution: new FormControl('', [Validators.required]),
      ip: new FormControl('', [Validators.required,
        Validators.pattern('\\b(([01]?\\d?\\d|2[0-4]\\d|25[0-5])\\.){3}([01]?\\d?\\d|2[0-4]\\d|25[0-5])\\b')],
        [this.validateIpAddressNotTaken()])
    });
  }

  onSubmit() {
    console.log(this.cameraAddForm.value);
    this.cameraService.postCamera(this.cameraAddForm.value).subscribe(res => {
      this.toastr.success('Camera saved succesfully!');
      this.router.navigateByUrl('/cameras-list');
    },
    error => {
      this.toastr.error('Could not save this camera in the server!');
      console.log(error);
    });
  }

  validateIpAddressNotTaken(): AsyncValidatorFn {
    return control => {
      // ad a delay
      return timer(500).pipe(
        switchMap(() => {
          if (!control.value) {
            return of(null); // obs of something
          }
          return this.cameraService.checkIpExists(control.value).pipe(
            map(res => {
              return res ? {ipExists: true} : null;
            })
          );
        })
      );
    };
  }

}
