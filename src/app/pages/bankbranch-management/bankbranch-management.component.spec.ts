import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankbranchManagementComponent } from './bankbranch-management.component';

describe('BankbranchManagementComponent', () => {
  let component: BankbranchManagementComponent;
  let fixture: ComponentFixture<BankbranchManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankbranchManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankbranchManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
