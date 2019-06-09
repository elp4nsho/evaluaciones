import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAdminComponent } from './ver-admin.component';

describe('VerAdminComponent', () => {
  let component: VerAdminComponent;
  let fixture: ComponentFixture<VerAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
