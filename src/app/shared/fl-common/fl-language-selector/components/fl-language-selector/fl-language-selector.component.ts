import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';
import { TranslocoService } from '@jsverse/transloco';
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

  private readonly router = inject(Router);
  private readonly translocoService = inject(TranslocoService);

  selectedCode = this.translocoService.activeLang;

  selectedLanguage = computed(() => {
    return this.LANGUAGES_MENU.find((language) => language.code === this.selectedCode())?.name;
  });

  selectLanguageItem(option: Language): void {
    if (this.selectedCode() === option.code) {
      return;
    }

    this.translocoService.setActiveLang(option.code);

    const urlTree = this.router.parseUrl(this.router.url);
    const urlParts = urlTree.root.children['primary']?.segments.map((segment) => segment.path);

    urlParts[0] = option.code;
    void this.router.navigate(['/', ...urlParts], {
      queryParams: urlTree.queryParams,
    });
  }
}
