export const LOGO = {
  name: 'Lucas',
  suffix: '.dev',
} as const;

export const NAV_ITEMS = [
  { id: 1, label: 'NAV.HOME', fragment: 'home' },
  { id: 2, label: 'NAV.ABOUT', fragment: 'about' },
  { id: 3, label: 'NAV.EXPERIENCE', fragment: 'experience' },
  { id: 4, label: 'NAV.CONTACT', fragment: 'contact' },
] as const;

export const VERSIONS = [
  { label: 'ReactJS', url: 'https://react.lucasoliveira04.com', current: false },
  { label: 'Angular', url: 'https://angular.lucasoliveira04.com', current: true },
  { label: 'Thymeleaf', url: 'https://thymeleaf.lucasoliveira04.com', current: false },
] as const;

export const SUPPORTED_LANGUAGES = [
  { value: 'pt', label: 'PT-BR' },
  { value: 'en', label: 'EN' },
  { value: 'es', label: 'ES' },
] as const;
