import { Time } from '@angular/common';

type LeaveOrHoliday = 'leave' | 'holiday' ;

export class TimeSheet {
  constructor(
    public id: 1 | null,
    public date: Date | null,
    public fromTime: Date,
    public toTime: string,
    public onsite_or_offsite: string,
    public customer: string,
    public contract: string,
    public tickets: string,
    public others: string,
  ) { }
  
}

export interface TimeSheetPage {
  count: number;
  results: TimeSheet[];
}

export const defaultEmptyTimeSheet: TimeSheet = {
  id: null,
  date: new Date(),
  fromTime: new Date(),
  toTime: new Date().toLocaleTimeString(),
  onsite_or_offsite: null,
  customer: null,
  contract: null,
  tickets: null,
  others : null
};
