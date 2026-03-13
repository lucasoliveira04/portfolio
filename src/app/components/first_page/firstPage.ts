import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { TranslateModule } from '@ngx-translate/core';
import { StackItem } from '../stack-item/stack-item';
import { HeaderService } from '../../services/header/header.service';
@Component({
  selector: 'first-page',
  imports: [Header, TranslateModule, StackItem],
  standalone: true,
  templateUrl: './firstPage.html',
  styleUrls: ['./firstPage.css', '../../../styles.css'],
})
export class FirstPage implements OnInit, OnDestroy {
  imgPerfil = 'img/eu/eu_pessoa_real.png';

  constructor(protected headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.hide();
  }

  ngOnDestroy(): void {
    this.headerService.show();
  }

  @HostListener('window:scroll')
  onScroll() {
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
