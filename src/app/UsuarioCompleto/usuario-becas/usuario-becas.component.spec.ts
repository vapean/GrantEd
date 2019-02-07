import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioBecasComponent } from './usuario-becas.component';

describe('UsuarioBecasComponent', () => {
  let component: UsuarioBecasComponent;
  let fixture: ComponentFixture<UsuarioBecasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioBecasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioBecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
