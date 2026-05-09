import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-public-header',
  imports: [],
  templateUrl: './public-header.component.html',
  styleUrl: './public-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicHeaderComponent {}
