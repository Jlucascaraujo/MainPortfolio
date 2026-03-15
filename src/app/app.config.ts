// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { TranslateLoader, provideTranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

// Criamos um Loader customizado para evitar o bug (TS2554 / NG0201) da biblioteca externa
export class CustomHttpLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}
  
  getTranslation(lang: string): Observable<any> {
    return this.http.get(`/i18n/${lang}.json`);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideTranslateService({
      fallbackLang: 'pt',
      loader: { provide: TranslateLoader, useClass: CustomHttpLoader, deps: [HttpClient] }
    })
  ]
};
