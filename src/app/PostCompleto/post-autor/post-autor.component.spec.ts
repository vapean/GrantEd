import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAutorComponent } from './post-autor.component';

describe('PostAutorComponent', () => {
  let component: PostAutorComponent;
  let fixture: ComponentFixture<PostAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
