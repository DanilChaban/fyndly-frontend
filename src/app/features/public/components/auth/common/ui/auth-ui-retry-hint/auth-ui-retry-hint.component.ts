import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-auth-ui-retry-hint',
  imports: [TranslocoPipe],
  templateUrl: './auth-ui-retry-hint.component.html',
  styleUrl: './auth-ui-retry-hint.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthUiRetryHintComponent {
  hint = input<string>('');
  seconds = input<number>(0);
  customStyles = input<string>('');
}
