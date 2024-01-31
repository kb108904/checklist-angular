import { TestBed } from '@angular/core/testing';

import { ChecklistStorageService } from './checklist-storage.service';

describe('ChecklistStorageService', () => {
  let service: ChecklistStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChecklistStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
