import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { AppComponent } from './app.component';
import { CameraDetailsComponent } from './camera-details/camera-details.component';
import { CamerasListComponent } from './cameras-list/cameras-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRouteModule } from './app-route.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { CameraAddComponent } from './camera-add/camera-add.component';
import { TextInputComponent } from './_shared/text-input/text-input.component';
import { CameraDetailResolver } from './_resolver/camera-detail.resolver';
import { CamerasChartComponent } from './cameras-chart/cameras-chart.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    CameraDetailsComponent,
    CamerasListComponent,
    NavBarComponent,
    NotFoundComponent,
    CameraAddComponent,
    TextInputComponent,
    CamerasChartComponent,
    ConfirmDialogComponent
   ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    ChartsModule,
    PaginationModule.forRoot(),
    BrowserAnimationsModule,
    AppRouteModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(
      {
        closeButton: true,
        positionClass: 'toast-bottom-right'
      }
    )
  ],
  providers: [
    CameraDetailResolver
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class AppModule { }
