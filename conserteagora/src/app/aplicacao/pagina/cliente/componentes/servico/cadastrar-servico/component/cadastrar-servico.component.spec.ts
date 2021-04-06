import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarServicoComponent } from './cadastrar-servico.component';

describe('HomeClienteComponent', () => {
  let component: CadastrarServicoComponent;
  let fixture: ComponentFixture<CadastrarServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
