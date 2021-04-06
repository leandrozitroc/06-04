import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultarServicoComponent } from './consultar-servico.component';


describe('ConsultarServicoComponent', () => {
  let component: ConsultarServicoComponent;
  let fixture: ComponentFixture<ConsultarServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
