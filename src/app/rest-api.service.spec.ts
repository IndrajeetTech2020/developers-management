import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { RestApiService } from './rest-api.service';
import { TimeSheetPage, TimeSheet } from './time-sheet';

describe('RestApiService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: RestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(RestApiService);
  });

  afterEach(() => { httpTestingController.verify() });

  it('paginates the tour packages list', () => {
    const pageIndex = 2;
    const testData: TimeSheetPage = {
      count: 2,
      results: []
    };
    service.listTimesheet(pageIndex).subscribe((page: TimeSheetPage) => {
      expect(page).toEqual(testData);
    });
    const req = httpTestingController.expectOne(`/api/v1/packages/?page=${pageIndex}`);
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
  });

  it('returns a tour package by id', () => {
    const testData = {
      id: 123,
      category: 'example',
      name: 'tour',
      price: 23.99,
      promo: 'promo',
      rating: 'medium',
      tour_length: 5,
      start: new Date()
    };
    
    
  });

  
});
