import { Project } from "../base/projectCardBase";

import csharp from "../../assets/langs/c-sharp.png";
import unity from "../../assets/langs/unity.png";

import nossoMarSalveOsPatinhosLogo from "../../assets/projects/NossoMarSalveOsPatinhos.jpg";

export class NossoMarSalveOsPatinhos extends Project {
  constructor(t, position) {
    super(
      position,
      true,
      t("projectsAndExperiences.nossoMarSalveOsPatos.title"),
      t("projectsAndExperiences.nossoMarSalveOsPatos.description"),
      [
        { name: "CSharp", icon: csharp },
        { name: "Unity", icon: unity }
      ],
      "Github",
      "https://github.com/MTGrupo/SOP-SalveOsPatinhos.git",
      "https://mtgroup.itch.io/nosso-mar-salve-os-patinhos",
      t("projectsAndExperiences.visit"),
      "Jul 2024",
      "Dez 2024",
      [nossoMarSalveOsPatinhosLogo],
      ["game"],
    );
  }
}
