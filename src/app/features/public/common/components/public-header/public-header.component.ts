import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FlLanguageSelectorComponent } from '@common/fl-language-selector/components/fl-language-selector/fl-language-selector.component';

@Component({
  selector: 'app-public-header',
  imports: [RouterLink, FlLanguageSelectorComponent],
  templateUrl: './public-header.component.html',
  styleUrl: './public-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicHeaderComponent {}
