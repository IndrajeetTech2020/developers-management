import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { DefaultComponent } from 'src/app/layouts/default/default.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from 'src/app/modules/search/search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { dashboardService } from 'src/app/modules/dashboard.service';
import { MaterialModule } from "src/app/material/material.module";
import { AppModule } from 'src/app/app.module';


@NgModule({
  declarations: [
    SearchComponent,
    dashboardComponent,
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MaterialModule,
  ],
  providers: [
    dashboardService
  ]
})
export class DefaultModule { }
