import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRecomendadosComponent } from './blog-recomendados.component';

describe('BlogRecomendadosComponent', () => {
  let component: BlogRecomendadosComponent;
  let fixture: ComponentFixture<BlogRecomendadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogRecomendadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogRecomendadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
