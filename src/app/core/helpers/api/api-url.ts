import { environment } from '../../../../environments/environment';

export function apiUrl(path: string, lang?: string): string {
  const url = `${environment.apiUrl}/${path}`;
  return lang ? `${url}?lang=${lang}` : url;
}
