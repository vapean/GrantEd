import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOpinionesComponent } from './main-opiniones.component';

describe('MainOpinionesComponent', () => {
  let component: MainOpinionesComponent;
  let fixture: ComponentFixture<MainOpinionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainOpinionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainOpinionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
