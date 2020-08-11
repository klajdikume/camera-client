import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CameraDetailsComponent } from './camera-details/camera-details.component';
import { CamerasListComponent } from './cameras-list/cameras-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRouteModule } from './app-route.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { CameraAddComponent } from './camera-add/camera-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './_shared/text-input/text-input.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    CameraDetailsComponent,
    CamerasListComponent,
    NavBarComponent,
    NotFoundComponent,
    CameraAddComponent,
    TextInputComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(
      {
        closeButton: true,
        positionClass: 'top-left'
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
