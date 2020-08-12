import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CamerasListComponent } from './cameras-list/cameras-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CameraAddComponent } from './camera-add/camera-add.component';
import { CameraDetailsComponent } from './camera-details/camera-details.component';
import { CameraDetailResolver } from './_resolver/camera-detail.resolver';
import { CamerasChartComponent } from './cameras-chart/cameras-chart.component';

const routes: Routes = [
    { path: '', component: CamerasListComponent },
    { path: 'cameras-list', component: CamerasListComponent },
    { path: 'chart', component: CamerasChartComponent },
    { path: 'create-camera', component: CameraAddComponent },
    { path: 'camera-details/:id', component: CameraDetailsComponent, resolve: {camera: CameraDetailResolver} },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouteModule { }
