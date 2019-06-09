import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaComponenteComponent } from './encuesta-componente.component';

describe('EncuestaComponenteComponent', () => {
  let component: EncuestaComponenteComponent;
  let fixture: ComponentFixture<EncuestaComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestaComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
