import { TestBed } from '@angular/core/testing';

import { ErrorDialogService } from './error-dialog.service';

describe('ErrorDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorDialogService = TestBed.get(ErrorDialogService);
    expect(service).toBeTruthy();
  });
});
