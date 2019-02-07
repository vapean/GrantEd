import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComentariosComponent } from './post-comentarios.component';

describe('PostComentariosComponent', () => {
  let component: PostComentariosComponent;
  let fixture: ComponentFixture<PostComentariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostComentariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
