import { Component, OnInit } from '@angular/core';
import { FirstPage } from '../../components/first_page/firstPage';
import { HeaderService } from '../../services/header/header.service';
import { SecondPage } from '../../components/second-page/second-page';

@Component({
  selector: 'app-home',
  imports: [FirstPage, SecondPage],
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
