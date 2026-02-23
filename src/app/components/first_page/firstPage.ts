import { Component, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { UserService } from '../../service/userService';

interface SocialLinks {
  linkedln: string;
  github: string;
  email: string;
  curriculo: string;
}

interface User {
  social: string[];
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

  ngOnInit() {
    this.loadUsers();
  }

  async loadUsers() {
    try {
      this.users = await this.userService.getUserCollection();

      if (this.users.length > 0) {
        const social = this.users[0].social;

        this.linkedlnUrl = social[0];
        this.githubUrl = social[1];
        this.emailUrl = social[2];
      }
    } catch (error) {
      console.error(error);
    }

    console.log(this.linkedlnUrl);
    console.log(this.githubUrl);
    console.log(this.emailUrl);
  }

  imgWidth = '550px';
  imgHeight = '550px';
  imgAlt = 'Imagem de perfil';

  imgPerfilCartoon = 'img/eu/eu_cartoon.png';
  imgPerfil = 'img/eu/eu_pessoa_real.png';

  isFlipped = false;

  toggleImage() {
    this.isFlipped = !this.isFlipped;
  }

  imageConfig = [
    {
      src: this.imgPerfil,
      width: this.imgWidth,
      height: this.imgHeight,
      alt: this.imgAlt,
    },
  ];

  image = this.imageConfig[0];

  showHeader = true;

  toggleHeader() {
    this.showHeader = !this.showHeader;
  }
}
