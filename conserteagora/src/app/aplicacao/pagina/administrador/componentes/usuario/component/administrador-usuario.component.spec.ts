import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministradorUsuarioComponent } from './administrador-usuario.component';


describe('AdministradorUsuarioComponent', () => {
  let component: AdministradorUsuarioComponent;
  let fixture: ComponentFixture<AdministradorUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
