import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FlFormComponent } from '@ui/fl-form/components/fl-form/fl-form.component';
import { FlFormInputComponent } from '@ui/fl-form-input/components/fl-form-input/fl-form-input.component';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';

@Component({
  selector: 'app-auth-sign-in-form',
  imports: [FlFormComponent, FlFormInputComponent, FlButtonComponent, ReactiveFormsModule],
  templateUrl: './auth-sign-in-form.component.html',
  styleUrl: './auth-sign-in-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthSignInFormComponent {
  formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    email: [''],
    password: [''],
  });

  onSubmit(): void {
    console.log(this.form.value);
  }
}
