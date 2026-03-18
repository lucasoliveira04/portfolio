import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { StackItem } from '../stack-item/stack-item';
import { HeaderService } from '../../services/header/header.service';
import { PROFILE, SOCIAL_ITEMS, STACK_ITEMS, RESUME_URLS } from '../../constants/profile.constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'first-page',
  imports: [Header, TranslateModule, StackItem],
  standalone: true,
  templateUrl: './firstPage.html',
  styleUrls: ['./firstPage.css', '../../../styles.css'],
})
export class FirstPage implements OnInit, OnDestroy {
  readonly imgPerfil = PROFILE.imgPerfil;
  readonly socialItems = SOCIAL_ITEMS;
  readonly stackItems = STACK_ITEMS;

  resumeUrl!: string;

  private langSub!: Subscription;

  constructor(
    protected headerService: HeaderService,
    private translate: TranslateService,
  ) {}

  ngOnInit(): void {
    this.headerService.hide();

    this.resumeUrl = this.getResumeUrl(this.translate.currentLang);

    this.langSub = this.translate.onLangChange.subscribe(({ lang }) => {
      this.resumeUrl = this.getResumeUrl(lang);
    });
  }

  ngOnDestroy(): void {
    this.headerService.show();
    this.langSub?.unsubscribe();
  }

  private getResumeUrl(lang: string): string {
    return RESUME_URLS[lang] ?? RESUME_URLS['en'];
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollY = window.scrollY;
    const firstPage = document.querySelector('first-page') as HTMLElement;
    const noventa = firstPage.offsetHeight * 0.9;

    if (scrollY >= noventa) {
      this.headerService.show();
    } else {
      this.headerService.hide();
    }
  }
}
