import { SOCIAL_LINKS } from './social.constants';

export const FOOTER_NAV_ITEMS = [
  { labelKey: 'NAV.HOME', fragment: 'home' },
  { labelKey: 'NAV.ABOUT', fragment: 'about' },
  { labelKey: 'NAV.EXPERIENCE', fragment: 'experience' },
  { labelKey: 'NAV.CONTACT', fragment: 'contact' },
] as const;

export const FOOTER_OWNER = {
  name: 'Lucas Oliveira',
} as const;
