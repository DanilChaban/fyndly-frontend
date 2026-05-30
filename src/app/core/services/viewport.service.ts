import { inject, Injectable, Signal } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { VIEWPORT_BREAKPOINTS } from '@core/constants/viewport-breakpoints';

@Injectable({
  providedIn: 'root',
})
export class ViewportService {
  private readonly breakpointObserver = inject(BreakpointObserver);

  isMobile = this.observeBreakpoint(VIEWPORT_BREAKPOINTS.mobile);
  isTablet = this.observeBreakpoint(VIEWPORT_BREAKPOINTS.tablet);
  isDesktop = this.observeBreakpoint(VIEWPORT_BREAKPOINTS.desktop);

  private observeBreakpoint(query: string): Signal<boolean> {
    return toSignal(this.breakpointObserver.observe(query).pipe(map((result) => result.matches)), {
      initialValue: false,
    });
  }
}
