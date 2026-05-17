import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTime',
})
export class RelativeTimePipe implements PipeTransform {
  transform(createdAt: number, now: number): string {
    const elapsedSeconds = Math.max(Math.floor((now - createdAt) / 1000), 0);

    if (elapsedSeconds <= 1) {
      return 'just now';
    }

    return `${elapsedSeconds}s ago`;
  }
}
