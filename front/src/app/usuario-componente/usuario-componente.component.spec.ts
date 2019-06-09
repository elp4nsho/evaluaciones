import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioComponenteComponent } from './usuario-componente.component';

describe('UsuarioComponenteComponent', () => {
  let component: UsuarioComponenteComponent;
  let fixture: ComponentFixture<UsuarioComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
