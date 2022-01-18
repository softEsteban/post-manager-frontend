import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostReqReadingComponent } from './post-req-reading.component';

describe('PostReqReadingComponent', () => {
  let component: PostReqReadingComponent;
  let fixture: ComponentFixture<PostReqReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostReqReadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostReqReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
