import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostReadingComponent } from './post-reading.component';

describe('PostReadingComponent', () => {
  let component: PostReadingComponent;
  let fixture: ComponentFixture<PostReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostReadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
