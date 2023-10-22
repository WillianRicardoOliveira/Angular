import { TestBed } from '@angular/core/testing';

import { CadastroSiteService } from './cadastro-site.service';

describe('CadastroSiteService', () => {
  let service: CadastroSiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroSiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
