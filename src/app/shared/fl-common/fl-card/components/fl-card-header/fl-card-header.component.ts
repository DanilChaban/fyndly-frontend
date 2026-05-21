import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardHeader } from '@angular/material/card';

@Component({
  selector: 'fl-card-header',
  imports: [MatCardHeader],
  templateUrl: './fl-card-header.component.html',
  styleUrl: './fl-card-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlCardHeaderComponent {}
