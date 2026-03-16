import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { INTERESTS, SKILLS, TIMELINE } from '../../constants/about.constants';
// TODO: move constants to a service and fetch them from there
@Component({
  selector: 'app-about-me',
  imports: [TranslateModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {
  interests = INTERESTS.map((i) => ({ ...i, hover: false }));
  readonly skills = SKILLS;
  readonly timeline = TIMELINE;
}
