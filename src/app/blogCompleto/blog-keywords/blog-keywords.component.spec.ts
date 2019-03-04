import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogKeywordsComponent } from './blog-keywords.component';

describe('BlogKeywordsComponent', () => {
  let component: BlogKeywordsComponent;
  let fixture: ComponentFixture<BlogKeywordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogKeywordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogKeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
