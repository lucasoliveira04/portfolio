import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SOCIAL_LINKS } from '../../constants/social.constants';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule],
  templateUrl: './contacts.html',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-6px)' }),
        animate('250ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class ContactComponent {
  sending = false;
  sent = false;
  emailInvalid = false;

  form = { name: '', email: '', subject: '', message: '' };

  contactLinks = [
    {
      label: 'Email',
      value: SOCIAL_LINKS.email,
      href: `mailto:${SOCIAL_LINKS.email}`,
      icon: 'fas fa-envelope',
      external: false,
    },
    {
      label: 'LinkedIn',
      value: `linkedin.com/in/${SOCIAL_LINKS.user_linkedin}`,
      href: `${SOCIAL_LINKS.linkedin}`,
      icon: 'fab fa-linkedin',
      external: true,
    },
    {
      label: 'GitHub',
      value: `github.com/${SOCIAL_LINKS.user_github}`,
      href: `${SOCIAL_LINKS.github}`,
      icon: 'fab fa-github',
      external: true,
    },
  ];

  // RFC 5322-inspired pattern used by Angular's own email validator
  private readonly EMAIL_PATTERN =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;

  private isValidEmail(email: string): boolean {
    return this.EMAIL_PATTERN.test(email);
  }

  sendMessage(): void {
    const { name, email, message } = this.form;
    if (!name.trim() || !email.trim() || !message.trim()) return;

    this.emailInvalid = !this.isValidEmail(email);
    if (this.emailInvalid) return;

    this.sending = true;

    setTimeout(() => {
      this.sending = false;
      this.sent = true;
      this.emailInvalid = false;
      this.form = { name: '', email: '', subject: '', message: '' };
      setTimeout(() => (this.sent = false), 5000);
    }, 1200);
  }
}
