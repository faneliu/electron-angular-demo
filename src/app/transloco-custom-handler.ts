
import { TranslocoConfig, TranslocoMissingHandler } from '@ngneat/transloco';

export class TranslocoCustomHandler implements TranslocoMissingHandler {
  handle(key: string, config: TranslocoConfig) {
    return null;
  }
}