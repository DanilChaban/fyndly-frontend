import { Injectable, signal } from '@angular/core';

@Injectable()
export class SidenavService {
  opened = signal(false);

  open(opened: boolean): void {
    this.opened.set(opened);
  }

  toggle(): void {
    this.opened.update((value) => !value);
  }
}
