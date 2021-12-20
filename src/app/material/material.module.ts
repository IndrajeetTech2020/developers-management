import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule } from '@angular/material/toolbar';
import {  MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import {  MatIconModule } from '@angular/material/icon';
import {  MatBadgeModule } from '@angular/material/badge';
import {  MatListModule } from '@angular/material/list';
import {  MatGridListModule } from '@angular/material/grid-list';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {  MatInputModule } from '@angular/material/input';
import {  MatSelectModule } from '@angular/material/select';
import {  MatRadioModule } from '@angular/material/radio';
import {  MatDatepickerModule } from '@angular/material/datepicker';
import {  MatChipsModule } from '@angular/material/chips';
import {  MatTooltipModule } from '@angular/material/tooltip';
import {  MatTableModule } from '@angular/material/table';
import {  MatPaginatorModule} from '@angular/material/paginator';
import { MatNativeDateModule, MatAutocompleteModule, MatBottomSheetModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule, MatRippleModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTabsModule, MatTreeModule } from "@angular/material";
const material =[
  FlexLayoutModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatBadgeModule,
  MatListModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
  MatChipsModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatNativeDateModule,

  MatAutocompleteModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTabsModule,
  MatTreeModule,
];

@NgModule({
  imports: [ material ],
  exports:[ material ],
})
export class MaterialModule { }
