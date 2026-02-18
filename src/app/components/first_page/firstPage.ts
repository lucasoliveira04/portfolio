import { Component, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { UserService } from '../../service/userService';

@Component({
  selector: 'first-page',
  imports: [Header],
  standalone: true,
  templateUrl: './firstPage.html',
  styleUrls: ['./firstPage.css', '../../../styles.css'],
})
export class FirstPage implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  linkedlnUrl: string = '';
  githubUrl: string = '';
  emailUrl: string = '';
  curriculoUrl: string = '';

  async ngOnInit() {
    this.users = await this.userService.getUserCollection();

    if (this.users.length > 0) {
      this.linkedlnUrl = this.users[0].social[0];
      this.githubUrl = this.users[0].social[1];
      this.emailUrl = this.users[0].social[2];
      this.curriculoUrl =
        'https://github.com/lucasoliveira04/portfolio/releases/download/v2.0.0/curriculo.pdf';
    }
  }

  imgPerfil = 'img/eu/eu.png';
  imgWidth = '550px';
  imgHeight = '550px';
  imgAlt = 'Imagem de perfil';

  imageConfig = [
    {
      src: this.imgPerfil,
      width: this.imgWidth,
      height: this.imgHeight,
      alt: this.imgAlt,
    },
  ];

  image = this.imageConfig[0];

  showHeader = false;

  toggleHeader() {
    this.showHeader = !this.showHeader;
  }
}
