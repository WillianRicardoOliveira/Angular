import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilSiteComponent } from './perfil-site.component';

describe('PerfilSiteComponent', () => {
  let component: PerfilSiteComponent;
  let fixture: ComponentFixture<PerfilSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
