import { Project } from "../base/projectCardBase";

import java from "../../../assets/langs/java.png";
import spring from "../../../assets/langs/Spring.png";

import estagio from "../../../assets/projects/estagio.png";

export class DesenvolvedorJrJava extends Project {
  constructor(t, position) {
    super(
      position,
      true,
      t("projectsAndExperiences.desenvolvedorJrJavaSmit.title"),
      t("projectsAndExperiences.desenvolvedorJrJavaSmit.description"),
      [
        { name: "Java", icon: java },
        { name: "Spring", icon: spring }
      ],
      false,
      false,
      null,
      null,
      "Jul 2025",
      false,
      [estagio],
      ["backend"],
    );
  }
}
