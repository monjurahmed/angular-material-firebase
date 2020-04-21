import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TraineesComponent } from './trainees/trainees.component';
import { TraineeEntryComponent } from './trainees/trainee-entry/trainee-entry.component';
import { TraineeListComponent } from './trainees/trainee-list/trainee-list.component';
import { MaterialModule } from './/material/material.module';
import {TraineeService} from './/services/trainee.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment} from '../environments/environment';
import {NotificationService } from '../app/shared/notification.service';


@NgModule({
  declarations: [
    AppComponent,
    TraineesComponent,
    TraineeEntryComponent,
    TraineeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ], 
  providers: [TraineeService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
