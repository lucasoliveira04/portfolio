import { Component, OnInit } from '@angular/core';
import { FirstPage } from '../../components/first_page/firstPage';
import { HeaderService } from '../../services/header/header.service';

@Component({
  selector: 'app-home',
  imports: [FirstPage],
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
