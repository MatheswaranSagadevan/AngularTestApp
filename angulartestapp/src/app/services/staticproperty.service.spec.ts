import { TestBed } from '@angular/core/testing';

import { StaticpropertyService } from './staticproperty.service';

describe('StaticpropertyService', () => {
  let service: StaticpropertyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticpropertyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
