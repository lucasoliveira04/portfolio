import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
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

  form = { name: '', email: '', subject: '', message: '' };

  contactLinks = [
    {
      label: 'Email',
      value: 'lucasolisocialmedia@gmail.com',
      href: 'mailto:lucasolisocialmedia@gmail.com',
      icon: 'fas fa-envelope',
      external: false,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/lucas-oliveira-campos',
      href: 'https://www.linkedin.com/in/lucas-oliveira-campos/',
      icon: 'fab fa-linkedin',
      external: true,
    },
    {
      label: 'GitHub',
      value: 'github.com/lucasoliveira04',
      href: 'https://github.com/lucasoliveira04',
      icon: 'fab fa-github',
      external: true,
    },
  ];

  sendMessage(): void {
    const { name, email, message } = this.form;
    if (!name.trim() || !email.trim() || !message.trim()) return;

    this.sending = true;

    setTimeout(() => {
      this.sending = false;
      this.sent = true;
      this.form = { name: '', email: '', subject: '', message: '' };
      setTimeout(() => (this.sent = false), 5000);
    }, 1200);
  }
}
