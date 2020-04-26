import { TestBed } from '@angular/core/testing';

import { AuthAppServiceService } from './auth-app-service.service';

describe('AuthAppServiceService', () => {
  let service: AuthAppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthAppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
