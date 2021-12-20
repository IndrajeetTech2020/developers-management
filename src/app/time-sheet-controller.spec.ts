import { TestBed, inject } from '@angular/core/testing';

import { RestApiService } from './rest-api.service';
import { TimesheetController } from './time-sheet-controller';
import { defaultEmptyTimeSheet } from './time-sheet';

describe('TourPackageController', () => {
  let mockService: jasmine.SpyObj<RestApiService>;
  let controller: TimesheetController;

  beforeEach(() => {
    mockService = jasmine.createSpyObj('restApiService', [
      'createTour',
      'updateTour',
      'listTours',
      'getTour',
      'deleteTour'
    ]);
    TestBed.configureTestingModule({
     
      providers: [
        { provide: RestApiService, useValue: mockService },
        TimesheetController
      ]
    });
  });

  beforeEach(inject([TimesheetController], (tourPackageController) => {
    controller = tourPackageController;
  }));

  describe('get', () => {
    it('calls tour package getTour method', () => {
      controller.get(1);
      expect(mockService.getTimesheet).toHaveBeenCalledWith(1);
    });
  });

  describe('save', () => {
    it('calls create tour method', () => {
      controller.save(defaultEmptyTimeSheet);
      expect(mockService.createTimesheet).toHaveBeenCalledWith(defaultEmptyTimeSheet);
    });
  });

  describe('delete', () => {
    it('calls delete tour package method', () => {
      controller.delete({ id: 1 });
      expect(mockService.deleteTimesheet).toHaveBeenCalledWith(1);
    });
  });

  describe('list', () => {
    it('calls tour package list method', () => {
      controller.list();
      expect(mockService.listTimesheet).toHaveBeenCalledWith(1, undefined);
      controller.list(3, 5);
      expect(mockService.listTimesheet).toHaveBeenCalledWith(3, 5);
    });
  });
});
