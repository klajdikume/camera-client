import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICamera } from '../_models/ICamera';
import { CameraParams } from '../_models/CameraParams';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICamerasPage } from '../_models/camerasPage';

@Injectable({
  providedIn: 'root'
})
export class CameraServiceService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCameras() {
    return this.http.get<ICamera[]>(this.baseUrl + 'cameras');
  }

  postCamera(camera: ICamera) {
    return this.http.post(this.baseUrl + 'cameras', camera);
  }

  checkIpExists(ip: string) {
    return this.http.get(this.baseUrl + 'cameras/IpAddressExists?ipAddress=' + ip);
  }

  getCameraById(id: string) {
    return this.http.get<ICamera>(this.baseUrl + 'cameras/camera?id=' + id);
  }

  deleteCameraById(id: string) {
    console.log(id);
    return this.http.delete(this.baseUrl + 'cameras/cameraForDelete?id=' + id);
  }

  getNumberOfCamerasWithAResolution(resolution: string) {
    return this.http.get<number>(this.baseUrl + 'cameras/resolutions?resolution=' + resolution);
  }

  getPagedCameras(cameraParams: CameraParams) {

    console.log(cameraParams);

    return this.http.get<ICamerasPage>(this.baseUrl + 'cameras/camerasPage?page=' + cameraParams.pageNumber + '&size='
                          + cameraParams.pageSize + '&sort=' + cameraParams.sort);
  }

}
