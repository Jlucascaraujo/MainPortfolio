// app.component.ts (ou app.ts)
import { Component, signal, inject } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'footer-root',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './footer.html',
  styleUrl: './footer.sass'
})
export class Footer {
  protected readonly title = signal('jogandoOMachado');
  
  private translate = inject(TranslateService);

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}