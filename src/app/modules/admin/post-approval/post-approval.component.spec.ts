import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostApprovalComponent } from './post-approval.component';

describe('PostApprovalComponent', () => {
  let component: PostApprovalComponent;
  let fixture: ComponentFixture<PostApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
