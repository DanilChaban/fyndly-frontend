import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { LANGUAGES_MENU } from '@common/fl-language-selector/constants/constants';
import { Language } from '@common/fl-language-selector/types/language';
import { FlMenuComponent } from '@ui/fl-menu/components/fl-menu/fl-menu.component';
import { FlMenuItemComponent } from '@ui/fl-menu/components/fl-menu-item/fl-menu-item.component';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';

@Component({
  selector: 'fl-language-selector',
  imports: [MatMenuTrigger, FlMenuComponent, FlMenuItemComponent, FlButtonComponent],
  templateUrl: './fl-language-selector.component.html',
  styleUrl: './fl-language-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlLanguageSelectorComponent {
  LANGUAGES_MENU = LANGUAGES_MENU;

  selectedLanguage = 'English';
  selectedCode = 'en';

  selectLanguageItem(option: Language): void {
    this.selectedCode = option.code;
    this.selectedLanguage = option.name;
  }
}
