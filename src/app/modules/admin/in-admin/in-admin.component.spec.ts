import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InAdminComponent } from './in-admin.component';

describe('InAdminComponent', () => {
  let component: InAdminComponent;
  let fixture: ComponentFixture<InAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
