import { ChangeDetectionStrategy, Component, inject, output, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { TranslocoPipe } from '@jsverse/transloco';
import { FlFormComponent } from '@ui/fl-form/components/fl-form/fl-form.component';
import { FlFormInputComponent } from '@ui/fl-form/components/fl-form-input/components/fl-form-input/fl-form-input.component';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';
import { AuthService } from '@auth/apis/auth.service';

@Component({
  selector: 'app-auth-forgot-password-form',
  imports: [ReactiveFormsModule, TranslocoPipe, FlFormComponent, FlFormInputComponent, FlButtonComponent, MatIcon],
  templateUrl: './auth-forgot-password-form.component.html',
  styleUrl: './auth-forgot-password-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthForgotPasswordFormComponent {
  submitClicked = output<string>();

  retryAfterSeconds = input(0);

  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(AuthService);

  loading = this.authService.forgotPassword.resource.isLoading;

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  });

  onSubmit(): void {
    const email = this.form.get('email')?.value;

    if (!email) {
      return;
    }

    this.submitClicked.emit(email);
  }
}
