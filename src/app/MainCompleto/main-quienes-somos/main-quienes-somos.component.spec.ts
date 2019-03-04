import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainQuienesSomosComponent } from './main-quienes-somos.component';

describe('MainQuienesSomosComponent', () => {
  let component: MainQuienesSomosComponent;
  let fixture: ComponentFixture<MainQuienesSomosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainQuienesSomosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainQuienesSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
