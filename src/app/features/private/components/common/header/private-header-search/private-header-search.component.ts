import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FlFormInputComponent } from '@ui/fl-form/components/fl-form-input/components/fl-form-input/fl-form-input.component';
import { FlFormComponent } from '@ui/fl-form/components/fl-form/fl-form.component';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';

@Component({
  selector: 'app-private-header-search',
  imports: [ReactiveFormsModule, FlFormInputComponent, FlFormComponent, FlButtonComponent],
  templateUrl: './private-header-search.component.html',
  styleUrl: './private-header-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateHeaderSearchComponent {
  type = input<'input' | 'button'>('input');

  form = new FormGroup({
    search: new FormControl(''),
  });
}
