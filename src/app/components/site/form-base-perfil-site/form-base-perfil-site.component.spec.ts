import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBasePerfilSiteComponent } from './form-base-perfil-site.component';

describe('FormBasePerfilSiteComponent', () => {
  let component: FormBasePerfilSiteComponent;
  let fixture: ComponentFixture<FormBasePerfilSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBasePerfilSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBasePerfilSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
