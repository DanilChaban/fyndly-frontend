import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslocoPipe } from '@jsverse/transloco';
import { FlFormComponent } from '@ui/fl-form/components/fl-form/fl-form.component';
import { FlFormInputComponent } from '@ui/fl-form/components/fl-form-input/components/fl-form-input/fl-form-input.component';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';

@Component({
  selector: 'app-auth-forgot-password-form',
  imports: [ReactiveFormsModule, TranslocoPipe, FlFormComponent, FlFormInputComponent, FlButtonComponent],
  templateUrl: './auth-forgot-password-form.component.html',
  styleUrl: './auth-forgot-password-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthForgotPasswordFormComponent {
  submitClicked = output<FormGroup>();

  private readonly formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  });

  onSubmit(): void {
    this.submitClicked.emit(this.form);
  }
}
