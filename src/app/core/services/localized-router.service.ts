import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';

@Injectable({
  providedIn: 'root',
})
export class LocalizedRouterService {
  private readonly router = inject(Router);
  private readonly translocoService = inject(TranslocoService);

  navigate(commands: string[]): Promise<boolean> {
    return this.router.navigate(['/', this.getCurrentLang(), ...commands]);
  }

  createUrlTree(commands: string[]) {
    return this.router.createUrlTree(['/', this.translocoService.getActiveLang(), ...commands]);
  }

  private getCurrentLang(): string {
    return this.router.url.split('/').filter(Boolean)[0];
  }
}
