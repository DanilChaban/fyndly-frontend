import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FlFormInputComponent } from '@ui/fl-form/components/fl-form-input/components/fl-form-input/fl-form-input.component';
import { FlFormComponent } from '@ui/fl-form/components/fl-form/fl-form.component';

@Component({
  selector: 'app-private-header-search',
  imports: [FlFormInputComponent, ReactiveFormsModule, FlFormComponent],
  templateUrl: './private-header-search.component.html',
  styleUrl: './private-header-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateHeaderSearchComponent {
  form = new FormGroup({
    search: new FormControl(''),
  });
}
