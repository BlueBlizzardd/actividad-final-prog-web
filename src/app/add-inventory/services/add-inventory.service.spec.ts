import { TestBed } from '@angular/core/testing';

import { AddInventoryService } from './add-inventory.service';

describe('AddInventoryService', () => {
  let service: AddInventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddInventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
