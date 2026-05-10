import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoPipe } from '@jsverse/transloco';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';
import { FlFormComponent } from '@ui/fl-form/components/fl-form/fl-form.component';
import { FlFormInputComponent } from '@ui/fl-form/components/fl-form-input/components/fl-form-input/fl-form-input.component';
import { AuthUiDividerComponent } from '@auth/common/ui/auth-ui-divider/auth-ui-divider.component';

@Component({
  selector: 'app-auth-sign-up-form',
  imports: [
    AuthUiDividerComponent,
    FlButtonComponent,
    FlFormComponent,
    FlFormInputComponent,
    FormsModule,
    ReactiveFormsModule,
    TranslocoPipe,
  ],
  templateUrl: './auth-sign-up-form.component.html',
  styleUrl: './auth-sign-up-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthSignUpFormComponent {
  private readonly formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    username: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
  });

  onSubmit(): void {
    console.log(this.form.value);
  }
}
