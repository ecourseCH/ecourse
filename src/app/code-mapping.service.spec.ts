import { TestBed } from '@angular/core/testing';

import { CodeMappingService } from './code-mapping.service';

describe('CodeMappingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodeMappingService = TestBed.get(CodeMappingService);
    expect(service).toBeTruthy();
  });
});
