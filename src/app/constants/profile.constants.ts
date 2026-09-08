import { SOCIAL_LINKS } from './social.constants';

export const RESUME_URLS: Record<string, string> = {
  en: 'https://github.com/lucasoliveira04/portfolio/releases/download/v2.0.0/Curriculum.pdf',
  pt: 'https://github.com/lucasoliveira04/portfolio/releases/download/v2.0.0/Curriculo.pdf',
};
export const PROFILE = {
  imgPerfil: 'img/eu/eu_pessoa_real.png',
  resumeUrl: 'https://example.com/resume',
} as const;

export const SOCIAL_ITEMS = [
  {
    label: 'LinkedIn',
    href: SOCIAL_LINKS.linkedin,
    icon: 'fab fa-linkedin',
    ariaLabel: 'LinkedIn',
  },
  {
    label: 'GitHub',
    href: SOCIAL_LINKS.github,
    icon: 'fab fa-github',
    ariaLabel: 'GitHub',
  },
  {
    label: 'Email',
    href: `mailto:${SOCIAL_LINKS.email}`,
    icon: 'fas fa-envelope',
    ariaLabel: 'Email',
  },
  {
    label: 'WhatsApp',
    href: `https://wa.me/${SOCIAL_LINKS.whatsapp}`,
    icon: 'fab fa-whatsapp',
    ariaLabel: 'WhatsApp',
  },
] as const;

export const STACK_ITEMS = [
  { name: 'Java', icon: 'devicon-java-plain', color: '#007396' },
  { name: 'Spring Boot', icon: 'devicon-spring-plain', color: '#99d98c' },
  { name: 'Kotlin', icon: 'devicon-kotlin-plain', color: '#0095D5' },
  { name: 'Angular', icon: 'devicon-angularjs-plain', color: '#DD0031' },
  // { name: 'JavaScript', icon: 'devicon-javascript-plain', color: '#F0DB4F' },
  // { name: 'TypeScript', icon: 'devicon-typescript-plain', color: '#3178C6' },
  //{ name: 'Docker', icon: 'devicon-docker-plain', color: '#2496ED' },
] as const;
