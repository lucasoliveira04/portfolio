import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { TranslateModule } from '@ngx-translate/core';
import { StackItem } from '../stack-item/stack-item';
import { HeaderService } from '../../services/header/header.service';
import { PROFILE, SOCIAL_ITEMS, STACK_ITEMS } from '../../constants/profile.constants';

@Component({
  selector: 'first-page',
  imports: [Header, TranslateModule, StackItem],
  standalone: true,
  templateUrl: './firstPage.html',
  styleUrls: ['./firstPage.css', '../../../styles.css'],
})
export class FirstPage implements OnInit, OnDestroy {
  readonly imgPerfil = PROFILE.imgPerfil;
  readonly resumeUrl = PROFILE.resumeUrl;
  readonly socialItems = SOCIAL_ITEMS;
  readonly stackItems = STACK_ITEMS;

  constructor(protected headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.hide();
  }

  ngOnDestroy(): void {
    this.headerService.show();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollY = window.scrollY;
    const firstPage = document.querySelector('first-page') as HTMLElement | null;
    if (!firstPage) return;
    const threshold = firstPage.offsetHeight * 0.9;

    if (scrollY >= threshold) {
      this.headerService.show();
    } else {
      this.headerService.hide();
    }
  }
}
