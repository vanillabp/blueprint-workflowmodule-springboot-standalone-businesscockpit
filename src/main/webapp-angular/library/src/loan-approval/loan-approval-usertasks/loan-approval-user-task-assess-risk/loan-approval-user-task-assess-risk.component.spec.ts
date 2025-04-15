import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApprovalUserTaskAssessRiskComponent } from './loan-approval-user-task-assess-risk.component';

describe('LoanApprovalUserTaskAssessRiskComponent', () => {
  let component: LoanApprovalUserTaskAssessRiskComponent;
  let fixture: ComponentFixture<LoanApprovalUserTaskAssessRiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanApprovalUserTaskAssessRiskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoanApprovalUserTaskAssessRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
