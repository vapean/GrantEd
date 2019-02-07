import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFiltroComponent } from './post-filtro.component';

describe('PostFiltroComponent', () => {
  let component: PostFiltroComponent;
  let fixture: ComponentFixture<PostFiltroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostFiltroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
