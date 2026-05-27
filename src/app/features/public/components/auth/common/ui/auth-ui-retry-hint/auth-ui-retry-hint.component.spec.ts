import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUiRetryHintComponent } from '@auth/common/ui/auth-ui-retry-hint/auth-ui-retry-hint.component';

describe('AuthUiRetryHintComponent', () => {
  let component: AuthUiRetryHintComponent;
  let fixture: ComponentFixture<AuthUiRetryHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthUiRetryHintComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthUiRetryHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
