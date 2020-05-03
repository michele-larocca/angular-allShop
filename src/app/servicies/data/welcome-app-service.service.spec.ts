import { TestBed } from '@angular/core/testing';

import { WelcomeAppServiceService } from './welcome-app-service.service';

describe('WelcomeAppServiceService', () => {
  let service: WelcomeAppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelcomeAppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
