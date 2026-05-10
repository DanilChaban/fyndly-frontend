import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LocalizedRouterService {
  private readonly router = inject(Router);

  navigate(commands: string[]): Promise<boolean> {
    return this.router.navigate(['/', this.getCurrentLang(), ...commands]);
  }

  private getCurrentLang(): string {
    return this.router.url.split('/').filter(Boolean)[0];
  }
}
