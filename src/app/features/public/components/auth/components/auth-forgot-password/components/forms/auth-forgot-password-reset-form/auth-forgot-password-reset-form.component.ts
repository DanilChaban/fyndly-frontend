import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslocoPipe } from '@jsverse/transloco';
import { FlFormComponent } from '@ui/fl-form/components/fl-form/fl-form.component';
import { FlFormInputComponent } from '@ui/fl-form/components/fl-form-input/components/fl-form-input/fl-form-input.component';
import { FlFormPasswordStrengthComponent } from '@ui/fl-form/components/fl-form-password-strength/components/fl-form-password-strength.component';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';
import { AuthForgotPasswordResendCodeComponent } from '@auth/components/auth-forgot-password/components/auth-forgot-password-resend-code/auth-forgot-password-resend-code.component';
import { AuthService } from '@auth/apis/auth.service';

@Component({
  selector: 'app-auth-forgot-password-reset-form',
  imports: [
    ReactiveFormsModule,
    TranslocoPipe,
    FlFormComponent,
    FlFormInputComponent,
    FlFormPasswordStrengthComponent,
    FlButtonComponent,
    AuthForgotPasswordResendCodeComponent,
  ],
  templateUrl: './auth-forgot-password-reset-form.component.html',
  styleUrl: './auth-forgot-password-reset-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthForgotPasswordResetFormComponent {
  submitClicked = output<FormGroup>();

  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(AuthService);

  loading = this.authService.resetPassword.resource.isLoading;

  form = this.formBuilder.group({
    code: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  });

  onSubmit(): void {
    this.submitClicked.emit(this.form);
  }
}
