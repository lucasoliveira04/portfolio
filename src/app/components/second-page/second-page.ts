import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

interface Client {
  name: string;
  period: string;
  role: string;
  techs: string[];
  description: string;
}

interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  techs: string[];
  clients?: Client[];
}

@Component({
  selector: 'second-page',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './second-page.html',
  styleUrl: './second-page.css',
})
export class SecondPage implements OnInit {
  expandedClients: number | null = null;
  experiences: Experience[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadExperiences();


    this.translate.onLangChange.subscribe(() => {
      this.loadExperiences();
    });
  }

  private loadExperiences(): void {
    this.translate.get('EXPERIENCE.LIST').subscribe((list: Experience[]) => {
      this.experiences = list;
    });
  }

  toggleClients(index: number) {
    this.expandedClients = this.expandedClients === index ? null : index;
  }
}
