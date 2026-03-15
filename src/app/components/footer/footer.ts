import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './footer.html',
})
export class FooterComponent {
  whatsappUrl = '';

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.buildWhatsappUrl();
    this.translate.onLangChange.subscribe(() => this.buildWhatsappUrl());
  }

  private buildWhatsappUrl(): void {
    this.translate.get('WHATSAPP_MSG').subscribe((msg) => {
      this.whatsappUrl = `https://wa.me/5511915511384?text=${encodeURIComponent(msg)}`;
    });
  }

  currentYear = new Date().getFullYear();

  navItems = [
    { labelKey: 'NAV.HOME', fragment: 'home' },
    { labelKey: 'NAV.ABOUT', fragment: 'about' },
    { labelKey: 'NAV.EXPERIENCE', fragment: 'experience' },
    { labelKey: 'NAV.CONTACT', fragment: 'contact' },
  ];

  scrollToSection(fragment: string): void {
    const el = document.getElementById(fragment);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
