import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';

@Component({
  selector: 'app-private-header-notifications',
  imports: [FlButtonComponent],
  templateUrl: './private-header-notifications.component.html',
  styleUrl: './private-header-notifications.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateHeaderNotificationsComponent {}
