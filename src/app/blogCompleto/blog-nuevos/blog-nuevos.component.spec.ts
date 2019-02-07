import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogNuevosComponent } from './blog-nuevos.component';

describe('BlogNuevosComponent', () => {
  let component: BlogNuevosComponent;
  let fixture: ComponentFixture<BlogNuevosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogNuevosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogNuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
