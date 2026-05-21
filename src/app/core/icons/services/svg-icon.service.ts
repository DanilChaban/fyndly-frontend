import { inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SVG_ICONS } from '@core/icons/constants/svg-icons';
import { SvgIconName } from '@core/icons/types/svg-icon-name';

@Injectable()
export class SvgIconService {
  private readonly matIconRegistry = inject(MatIconRegistry);
  private readonly domSanitizer = inject(DomSanitizer);

  registerIcons(): void {
    SVG_ICONS.forEach((iconName) => this.registerIcon(iconName));
  }

  private registerIcon(iconName: SvgIconName): void {
    this.matIconRegistry.addSvgIcon(
      iconName,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${iconName}.svg`),
    );
  }
}
