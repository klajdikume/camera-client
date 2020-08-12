import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICamera } from '../_models/ICamera';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

}
