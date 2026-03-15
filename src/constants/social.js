import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaFile,
} from "react-icons/fa";

import curriculoPt from "../assets/pdf/Curriculo_Lucas_Oliveira.pdf";
import curriculoEn from "../assets/pdf/Curriculum_Lucas_Oliveira.pdf";

export const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/lucasoliveira04", icon: FaGithub },
  { name: "Twitter", url: "https://twitter.com/lucasoli04", icon: FaTwitter },
  {
    name: "Instagram",
    url: "https://instagram.com/lucasoliveira.04_",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/lucas-oliveira-campos",
    icon: FaLinkedin,
  },
  {
    name: "Gmail",
    url: "mailto:lucasolisocialmedia@gmail.com",
    icon: FaEnvelope,
  },
];

export const CURRICULO = {
  pt: curriculoPt,
  en: curriculoEn,
};
