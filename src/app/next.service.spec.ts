import { TestBed } from '@angular/core/testing';

import { NextService } from './next.service';

describe('NextService', () => {
  let service: NextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
