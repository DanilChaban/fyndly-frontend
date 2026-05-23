import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-auth-email-varification-notice',
  imports: [MatIcon, TranslocoPipe],
  templateUrl: './auth-email-varification-notice.component.html',
  styleUrl: './auth-email-varification-notice.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthEmailVarificationNoticeComponent {}
