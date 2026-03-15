import { Component, signal, inject } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'header-root',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './header.html',
  styleUrl: './header.sass'
})
export class Header {
  protected readonly title = signal('jogandoOMachado');
  
  private translate = inject(TranslateService);

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}