import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ICamera } from '../_models/ICamera';
import { CameraServiceService } from '../_services/camera-service.service';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class CameraDetailResolver implements Resolve<ICamera> {

    constructor(private cameraService: CameraServiceService,
                private router: Router,
                private toastr: ToastrService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<ICamera> {

        console.log(route.params['id']);

        return this.cameraService.getCameraById(route.params['id']).pipe(
            catchError(error => {
                this.toastr.error('Can not retrive data');
                this.router.navigate(['/cameras-list']);
                return of(null);
            })
        );
    }
}

