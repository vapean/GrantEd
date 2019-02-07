import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPersonaComponent } from './usuario-persona.component';

describe('UsuarioPersonaComponent', () => {
  let component: UsuarioPersonaComponent;
  let fixture: ComponentFixture<UsuarioPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
