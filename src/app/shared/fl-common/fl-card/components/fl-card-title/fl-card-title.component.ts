import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'fl-card-title',
  imports: [MatCardTitle],
  templateUrl: './fl-card-title.component.html',
  styleUrl: './fl-card-title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlCardTitleComponent {}
