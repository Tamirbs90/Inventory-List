import { TestBed } from '@angular/core/testing';

import { SpecificItemService } from './specific-item.service';

describe('SpecificItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecificItemService = TestBed.get(SpecificItemService);
    expect(service).toBeTruthy();
  });
});
