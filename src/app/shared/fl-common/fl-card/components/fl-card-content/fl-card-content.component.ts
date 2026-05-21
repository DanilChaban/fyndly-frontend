import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardContent } from '@angular/material/card';

@Component({
  selector: 'fl-card-content',
  imports: [MatCardContent],
  templateUrl: './fl-card-content.component.html',
  styleUrl: './fl-card-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlCardContentComponent {}
