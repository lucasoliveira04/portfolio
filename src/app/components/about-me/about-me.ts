import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  imports: [TranslateModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {
  interests = [
    { label: 'API Design', icon: 'fas fa-plug', hover: false },
    { label: 'System Design', icon: 'fas fa-microchip', hover: false },
    { label: 'LeetCode & Code Challenges', icon: 'fas fa-code', hover: false },
    { label: 'DevOps', icon: 'fab fa-docker', hover: false },
    { label: 'Databases', icon: 'fas fa-database', hover: false },
    { label: 'Clean Code', icon: 'fas fa-book', hover: false },
    { label: 'SOLID', icon: 'fas fa-layer-group', hover: false },
    { label: 'Design Patterns', icon: 'fas fa-shapes', hover: false },
    { label: 'Open Source', icon: 'fas fa-code-branch', hover: false },
  ];

  skills = [
    { nameKey: 'ABOUT.SKILLS.0.name', pct: 90 },
    { nameKey: 'ABOUT.SKILLS.1.name', pct: 85 },
    { nameKey: 'ABOUT.SKILLS.2.name', pct: 70 },
    { nameKey: 'ABOUT.SKILLS.3.name', pct: 65 },
    { nameKey: 'ABOUT.SKILLS.4.name', pct: 60 },
  ];

  timeline = [
    {
      yearKey: 'ABOUT.TIMELINE.0.year',
      titleKey: 'ABOUT.TIMELINE.0.title',
      descKey: 'ABOUT.TIMELINE.0.description',
    },
    {
      yearKey: 'ABOUT.TIMELINE.1.year',
      titleKey: 'ABOUT.TIMELINE.1.title',
      descKey: 'ABOUT.TIMELINE.1.description',
    },
    {
      yearKey: 'ABOUT.TIMELINE.2.year',
      titleKey: 'ABOUT.TIMELINE.2.title',
      descKey: 'ABOUT.TIMELINE.2.description',
    },
    {
      yearKey: 'ABOUT.TIMELINE.3.year',
      titleKey: 'ABOUT.TIMELINE.3.title',
      descKey: 'ABOUT.TIMELINE.3.description',
    },
    {
      yearKey: 'ABOUT.TIMELINE.4.year',
      titleKey: 'ABOUT.TIMELINE.4.title',
      descKey: 'ABOUT.TIMELINE.4.description',
    },
  ];
}
