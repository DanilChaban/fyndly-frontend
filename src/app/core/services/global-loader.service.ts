import { inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GlobalLoaderService {
  private readonly router = inject(Router);

  readonly isLoading = signal(false);

  initializeLoader(): void {
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.show();
      }

      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.hide();
      }
    });
  }

  private show(): void {
    this.isLoading.set(true);
  }

  private hide(): void {
    this.isLoading.set(false);
  }
}
