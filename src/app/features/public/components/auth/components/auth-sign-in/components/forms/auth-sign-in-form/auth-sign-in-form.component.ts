import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FlFormComponent } from '@ui/fl-form/components/fl-form/fl-form.component';
import { FlFormInputComponent } from '@ui/fl-form-input/components/fl-form-input/fl-form-input.component';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';
import { AuthUiDividerComponent } from '@auth/common/ui/auth-ui-divider/auth-ui-divider.component';

@Component({
  selector: 'app-auth-sign-in-form',
  imports: [FlFormComponent, FlFormInputComponent, ReactiveFormsModule, FlButtonComponent, AuthUiDividerComponent],
  templateUrl: './auth-sign-in-form.component.html',
  styleUrl: './auth-sign-in-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthSignInFormComponent {
  private readonly formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    email: [''],
    password: [''],
  });

  onSubmit(): void {
    console.log(this.form.value);
  }
}
