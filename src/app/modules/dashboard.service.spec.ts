import { TestBed } from '@angular/core/testing';

import { dashboardService } from './dashboard.service';

describe('dashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: dashboardService = TestBed.get(dashboardService);
    expect(service).toBeTruthy();
  });
});
