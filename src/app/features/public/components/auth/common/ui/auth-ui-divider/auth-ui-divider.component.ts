import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-auth-ui-divider',
  imports: [TranslocoPipe],
  templateUrl: './auth-ui-divider.component.html',
  styleUrl: './auth-ui-divider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthUiDividerComponent {}
