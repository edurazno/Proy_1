import { TestBed } from '@angular/core/testing';

import { AutentificacionGuardService } from './autentificacion-guard.service';

describe('AutentificacionGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutentificacionGuardService = TestBed.get(AutentificacionGuardService);
    expect(service).toBeTruthy();
  });
});
