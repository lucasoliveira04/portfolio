import { Component } from '@angular/core';
import { Header } from '../header/header';
import { TranslateModule } from '@ngx-translate/core';
import { StackItem } from '../stack-item/stack-item';
@Component({
  selector: 'first-page',
  imports: [Header, TranslateModule, StackItem],
  standalone: true,
  templateUrl: './firstPage.html',
  styleUrls: ['./firstPage.css', '../../../styles.css'],
})
export class FirstPage {
  imgPerfil = 'img/eu/eu_pessoa_real.png';

  showHeader = true;

  toggleHeader() {
    this.showHeader = !this.showHeader;
  }
}
