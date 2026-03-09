import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('pt');
    translate.use('pt');
  }
  protected readonly title = signal('portfolio');
}
