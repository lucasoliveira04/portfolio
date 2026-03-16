import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SOCIAL_LINKS } from '../../constants/social.constants';
import { FOOTER_NAV_ITEMS, FOOTER_OWNER } from '../../constants/footer.constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.html',
})
export class FooterComponent implements OnInit {
  readonly social = SOCIAL_LINKS;
  readonly navItems = FOOTER_NAV_ITEMS;
  readonly owner = FOOTER_OWNER;
  readonly currentYear = new Date().getFullYear();

  whatsappUrl = '';

  private readonly translate = inject(TranslateService);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.buildWhatsappUrl();
    this.translate.onLangChange
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.buildWhatsappUrl());
  }

  private buildWhatsappUrl(): void {
    this.translate.get('WHATSAPP_MSG').subscribe((msg: string) => {
      this.whatsappUrl = `https://wa.me/${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(msg)}`;
    });
  }

  scrollToSection(fragment: string): void {
    const el = document.getElementById(fragment);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
