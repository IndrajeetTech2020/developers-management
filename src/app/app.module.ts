import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { RestApiService } from '../app/rest-api.service';
import { TimesheetController } from '../app/time-sheet-controller';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { CreateTimesheetComponent } from "src/app/modules/create-timesheet/create-timesheet.component";
import { AmazingTimePickerModule } from "amazing-time-picker";
import { HistoryComponent } from './modules/history/history.component';
import {SearchService} from 'src/app/search-api.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateTimesheetComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AmazingTimePickerModule,
  ],
  providers: [
    RestApiService,
    TimesheetController,
    SearchService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
