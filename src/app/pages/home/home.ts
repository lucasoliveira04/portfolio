import { Component, OnInit } from '@angular/core';
import { FirstPage } from '../../components/first_page/firstPage';
import { HeaderService } from '../../services/header/header.service';
import { SecondPage } from '../../components/second-page/second-page';
import { AboutMe } from '../../components/about-me/about-me';
import { ContactComponent } from '../../components/contacts/contacts';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [FirstPage, SecondPage, AboutMe, ContactComponent, FooterComponent],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.hide();
  }
}
