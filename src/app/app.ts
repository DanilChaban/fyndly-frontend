import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SvgIconService } from '@core/icons/services/svg-icon.service';
import { GlobalLoaderService } from '@core/services/global-loader.service';
import { GlobalLoaderComponent } from '@core/components/global-loader/global-loader.component';

@Component({
  selector: 'fl-root',
  imports: [RouterOutlet, GlobalLoaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly svgIconService = inject(SvgIconService);
  private readonly globalLoaderService = inject(GlobalLoaderService);

  loading = this.globalLoaderService.isLoading;

  constructor() {
    this.globalLoaderService.initializeLoader();
    this.svgIconService.registerIcons();
  }
}
