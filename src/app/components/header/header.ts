import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderService } from '../../services/header/header.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css', '../../../styles.css'],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate(
          '300ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({ transform: 'translateY(0)', opacity: 1 }),
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({ transform: 'translateY(-100%)', opacity: 0 }),
        ),
      ]),
    ]),
  ],
})
export class Header {
  constructor(
    private translate: TranslateService,
    protected headerService: HeaderService,
  ) {}

  showNav = input<boolean>(false);
  showLangSelect = input<boolean>(false);
  showDarkModeToggle = input<boolean>(false);
  alwaysShowControls = input<boolean>(false);

  navItems = [
    { id: 1, label: 'NAV.HOME', fragment: 'home' },
    { id: 2, label: 'NAV.ABOUT', fragment: 'about' },
    { id: 3, label: 'NAV.EXPERIENCE', fragment: 'experience' },
    { id: 4, label: 'NAV.CONTACT', fragment: 'contact' },
  ];

  versions = [
    { label: 'ReactJS', url: 'https://lucasoliveira04.com', current: false },
    { label: 'Angular', url: 'https://angular.lucasoliveira04.com', current: true },
    { label: 'Thymeleaf', url: '', current: false },
  ];

  changeVersion(url: string): void {
    if (url) window.open(url, '_blank');
  }

  scrollToSection(fragment: string): void {
    const el = document.getElementById(fragment);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  toggleDarkMode(): void {
    const html = document.documentElement;
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
  }

  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
