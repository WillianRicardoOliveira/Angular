import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFornecedorComponent } from './listar-fornecedor.component';

describe('ListarFornecedorComponent', () => {
  let component: ListarFornecedorComponent;
  let fixture: ComponentFixture<ListarFornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFornecedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
