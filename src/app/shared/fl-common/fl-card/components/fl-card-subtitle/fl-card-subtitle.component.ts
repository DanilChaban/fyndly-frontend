import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardSubtitle } from '@angular/material/card';

@Component({
  selector: 'fl-card-subtitle',
  imports: [MatCardSubtitle],
  templateUrl: './fl-card-subtitle.component.html',
  styleUrl: './fl-card-subtitle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlCardSubtitleComponent {}
