import { Observable, BehaviorSubject } from 'rxjs';
import { TimeSheet, TimeSheetPage } from './time-sheet';
import { RestApiService } from './rest-api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class TimesheetController {
  constructor(private restApiService: RestApiService) { }

  save(timeSheetData: TimeSheet) {
    if (timeSheetData.id > 0) {
      return this.restApiService.updateTimesheet(timeSheetData);
    }
    return this.restApiService.createTimesheet(timeSheetData);
  }

  get(id: number) {
    return this.restApiService.getTimesheet(id);
  }

  list(pageIndex: number = 1): any {
    return this.restApiService.listTimesheet(pageIndex);
  }

  delete(timeSheet: Pick<TimeSheet, 'id'>) {
    return this.restApiService.deleteTimesheet(timeSheet.id);
  }

  lstSave(timeSheetData : TimeSheet[]){
    console.log('EventFires');
    return this.restApiService.lstCreateTimesheet(timeSheetData);
  }
  
}
