import { inject, Pipe, PipeTransform } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Pipe({
  name: 'relativeTime',
})
export class RelativeTimePipe implements PipeTransform {
  private readonly translocoService = inject(TranslocoService);

  transform(createdAt: number, now: number): string {
    const elapsedSeconds = Math.max(Math.floor((now - createdAt) / 1000), 0);

    if (elapsedSeconds <= 1) {
      return this.translocoService.translate('global.relative_time.just_now');
    }

    return this.translocoService.translate('global.relative_time.seconds_ago', {
      seconds: elapsedSeconds,
    });
  }
}
