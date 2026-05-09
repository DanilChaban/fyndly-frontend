import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardActions } from '@angular/material/card';

@Component({
  selector: 'fl-card-actions',
  imports: [MatCardActions],
  templateUrl: './fl-card-actions.component.html',
  styleUrl: './fl-card-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlCardActionsComponent {}
