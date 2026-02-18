import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css', '../../../styles.css'],
})
export class Header {
  navItems = [
    { id: 1, label: 'Home', path: '/' },
    { id: 2, label: 'Sobre', path: '/about' },
    { id: 3, label: 'Projetos', path: '/projects' },
    { id: 4, label: 'Contato', path: '/contact' },
  ];
}
