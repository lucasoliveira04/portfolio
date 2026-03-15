import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderService } from '../../services/header/header.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { LOGO, NAV_ITEMS, VERSIONS, SUPPORTED_LANGUAGES } from '../../constants/header.constants';

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

  readonly logo = LOGO;
  readonly navItems = NAV_ITEMS;
  readonly versions = VERSIONS;
  readonly languages = SUPPORTED_LANGUAGES;

  mobileMenuOpen = false;

  changeVersion(url: string): void {
    if (url) window.open(url, '_blank');
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang);
  }

  scrollToSection(fragment: string): void {
    const el = document.getElementById(fragment);
    if (!el) return;
    const headerHeight = 72;
    const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleDarkMode(): void {
    const html = document.documentElement;
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
