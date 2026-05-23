import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthEmailVarificationNoticeComponent } from '@auth/components/auth-email-verification/components/auth-email-varification-notice/auth-email-varification-notice.component';

describe('AuthEmailVarificationNoticeComponent', () => {
  let component: AuthEmailVarificationNoticeComponent;
  let fixture: ComponentFixture<AuthEmailVarificationNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthEmailVarificationNoticeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthEmailVarificationNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
