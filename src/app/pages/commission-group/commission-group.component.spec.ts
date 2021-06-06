import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionGroupComponent } from './commission-group.component';

describe('CommissionGroupComponent', () => {
  let component: CommissionGroupComponent;
  let fixture: ComponentFixture<CommissionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommissionGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
