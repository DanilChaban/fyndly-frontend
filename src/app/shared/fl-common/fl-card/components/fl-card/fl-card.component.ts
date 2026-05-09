import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'fl-card',
  imports: [MatCard],
  templateUrl: './fl-card.component.html',
  styleUrl: './fl-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlCardComponent {}
