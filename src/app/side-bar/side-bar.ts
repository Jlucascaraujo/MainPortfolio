import { Component, signal, inject } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'sidebar-root',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.sass'
})
export class SideBar {
  protected readonly title = signal('jogandoOMachado');
  
  private translate = inject(TranslateService);

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}