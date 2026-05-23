import { ChangeDetectionStrategy, Component, effect, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslocoPipe } from '@jsverse/transloco';
import { FlFormComponent } from '@ui/fl-form/components/fl-form/fl-form.component';
import { FlFormOtpInputComponent } from '@ui/fl-form/components/fl-form-otp-input/components/fl-form-otp-input/fl-form-otp-input.component';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';
import { VerificationStatus } from '@auth/components/auth-email-verification/enums/verification-status';
import { VerificationStatusService } from '@auth/components/auth-email-verification/services/verification-status.service';
import { AuthService } from '@auth/apis/auth.service';

@Component({
  selector: 'app-auth-email-verification-form',
  imports: [ReactiveFormsModule, FlFormComponent, TranslocoPipe, FlFormOtpInputComponent, FlButtonComponent],
  templateUrl: './auth-email-verification-form.component.html',
  styleUrl: './auth-email-verification-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthEmailVerificationFormComponent {
  private readonly verificationStatusService = inject(VerificationStatusService);
  private readonly authService = inject(AuthService);

  loading = this.authService.verifyEmail.resource.isLoading;

  submitClicked = output<FormGroup>();

  status = this.verificationStatusService.status;

  private readonly formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    code: ['', [Validators.required]],
  });

  constructor() {
    effect(() => {
      if (this.status() === VerificationStatus.EXPIRED) {
        this.form.reset();
        this.form.disable();
        return;
      }

      this.form.enable();
    });
  }

  onSubmit(): void {
    this.submitClicked.emit(this.form);
  }
}
