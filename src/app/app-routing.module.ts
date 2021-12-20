import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { dashboardComponent } from './modules/dashboard/dashboard.component';
import { SearchComponent } from './modules/search/search.component';
import { CreateTimesheetComponent } from './modules/create-timesheet/create-timesheet.component';
import { HistoryComponent } from "./modules/history/history.component";

const routes: Routes = [
  {
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: dashboardComponent
  }, {
    path: 'search',
    component: SearchComponent
  },
  { path: 'timesheets/:id/update', component: CreateTimesheetComponent },
  { path: 'timesheets/new', component: CreateTimesheetComponent },
  { path: 'history', component: HistoryComponent },
 
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
