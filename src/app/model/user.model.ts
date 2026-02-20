export interface SocialLinks {
  linkedln: string;
  github: string;
  email: string;
  curriculo: string;
}

export interface User {
  id: string;
  social: SocialLinks;
}
