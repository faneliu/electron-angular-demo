import {
  provideTransloco,
  provideTranslocoMissingHandler,
  provideTranslocoTranspiler,
  TranslocoModule
} from '@ngneat/transloco';
import { isDevMode, NgModule } from '@angular/core';
import { TranslocoHttpLoader } from './transloco-loader';
import { TranslocoCustomHandler } from './transloco-custom-handler';
import { TranslocoCustomTranspiler } from './transloco-custom-transpiler';


@NgModule({
  exports: [ TranslocoModule ],
  providers: [
      provideTransloco({
        config: {
          availableLangs: ['en', 'zh'],
          defaultLang: 'en',
          // Remove this option if your application doesn't support changing language in runtime.
          reRenderOnLangChange: true,
          prodMode: !isDevMode(),
          fallbackLang: 'zh',
          missingHandler: {
            useFallbackTranslation: false,
            allowEmpty: true
          }

        },
        loader: TranslocoHttpLoader,
      }),
      provideTranslocoMissingHandler(TranslocoCustomHandler),
      provideTranslocoTranspiler(TranslocoCustomTranspiler)
  ],
})
export class TranslocoRootModule {}
