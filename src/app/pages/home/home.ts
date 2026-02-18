import { Component } from '@angular/core';
import { FirstPage } from '../../components/first_page/firstPage';

@Component({
  selector: 'app-home',
  imports: [FirstPage],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
