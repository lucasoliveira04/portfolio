import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

export const API_URL =
  "https://api-send-email-spring.onrender.com/api/v2/sendMessage";

export const FOOTER_SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/lucasoliveira04",
    icon: FaGithub,
    external: true,
  },
  {
    name: "Email",
    href: "mailto:lucasolisocialmedia@gmail.com",
    icon: FaEnvelope,
    external: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/lucas-oliveira-campos",
    icon: FaLinkedin,
    external: true,
  },
];
