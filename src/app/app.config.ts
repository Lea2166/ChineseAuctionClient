import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter,withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top' })
    ), provideNzI18n(en_US), provideAnimationsAsync(), provideHttpClient()
  ]
};



