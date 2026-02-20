import { Component, EnvironmentInjector, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { UserService } from '../../service/userService';

interface SocialLinks {
  linkedln: string;
  github: string;
  email: string;
  curriculo: string;
}

interface User {
  social: SocialLinks;
}

@Component({
  selector: 'first-page',
  imports: [Header],
  standalone: true,
  templateUrl: './firstPage.html',
  styleUrls: ['./firstPage.css', '../../../styles.css'],
})
export class FirstPage implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  linkedlnUrl: string = '';
  githubUrl: string = '';
  emailUrl: string = '';
  curriculoUrl: string = '';

  async ngOnInit() {
    this.users = await this.userService.getUserCollection();

    if (this.users.length > 0) {
      const user = this.users[0];
      this.linkedlnUrl = user.social.linkedln;
      this.githubUrl = user.social.github;
      this.emailUrl = user.social.email;
      this.curriculoUrl = user.social.curriculo;
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
