import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css', '../../../styles.css'],
})
export class Header {
  constructor(private translate: TranslateService) {}

  navItems = [
    { id: 1, label: 'Home', path: '/' },
    { id: 2, label: 'Sobre', path: '/about' },
    { id: 3, label: 'Projetos', path: '/projects' },
    { id: 4, label: 'Contato', path: '/contact' },
  ];

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
