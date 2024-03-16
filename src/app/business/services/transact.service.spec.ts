import { TestBed } from '@angular/core/testing';

import { TransactService } from './transact.service';

describe('TransactService', () => {
  let service: TransactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
