import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TimesheetController } from "src/app/time-sheet-controller";
import { AmazingTimePickerService } from "amazing-time-picker";
import { TimeSheet } from 'src/app/time-sheet';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';

@Component({
  selector: 'app-create-timesheet',
  templateUrl: './create-timesheet.component.html',
  styleUrls: ['./create-timesheet.component.scss']
})
export class CreateTimesheetComponent implements OnInit {

  timesheetForm: FormGroup;
  @Input() id: number;
  lstTimesheet : TimeSheet[] = [];
  btn_Add_Flag : boolean = false;
  timeSheet : any;

  constructor(
    private timeSheetController: TimesheetController,
    private atp : AmazingTimePickerService
  ) { }

  ngOnInit(): void {
    this.timesheetForm = new FormGroup({
      id: new FormControl(0),
      date: new FormControl(new Date()),
      fromTime: new FormControl('fromTime'),
      toTime: new FormControl('toTime'),
      onsite_or_offsite: new FormControl('onsite_or_offsite'),
      customer: new FormControl('customer'),
      contract: new FormControl('contract'),
      tickets: new FormControl('tickets'),
      others: new FormControl('others')
    });
  }
  save() {
    const timeSheetData = this.timesheetForm.getRawValue();
    
    this.timeSheetController.save(timeSheetData).subscribe((savedData: any) => {
      this.timesheetForm.get('id').setValue(savedData.id);
    
    });
   
  }
  lstsave() {
    console.log('EventFires');
    for (const timeSheet of this.lstTimesheet) {
      this.timeSheetController.save(timeSheet).subscribe((savedData: any) => {
        this.timesheetForm.get('id').setValue(savedData.id);
      });
    }
  }
  open() {
    console.log("Event fires");
    const amazingTimePicker =this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      console.log(time);
    });
  }
  addtolist(){
    console.log('event fires')
    const timeSheetData = <TimeSheet>this.timesheetForm.getRawValue();
    this.timeSheet=timeSheetData;
    this.lstTimesheet.push(new TimeSheet(timeSheetData.id,timeSheetData.date,timeSheetData.fromTime,timeSheetData.toTime,
      timeSheetData.onsite_or_offsite,timeSheetData.customer,timeSheetData.contract,
      timeSheetData.tickets,timeSheetData.others));
    console.log(this.lstTimesheet);

  }
}
