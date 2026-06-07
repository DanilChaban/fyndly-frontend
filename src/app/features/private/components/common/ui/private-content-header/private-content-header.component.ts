import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { ContentHeaderData } from '@private/types/content-header-data';

@Component({
  selector: 'app-private-content-header',
  imports: [TranslocoPipe],
  templateUrl: './private-content-header.component.html',
  styleUrl: './private-content-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateContentHeaderComponent {
  data = input<ContentHeaderData>({});
}
