import python from "../../assets/langs/python.png";
import flask from "../../assets/langs/Flask.png";
import redis from "../../assets/langs/redis.png";
import docker from "../../assets/langs/docker.png";
import rabbitmq from "../../assets/langs/RabbitMQ.png";

import estagio from "../../assets/projects/estagio.png";
import { Project } from "../base/projectCardBase";

export class ProcessImageApi extends Project {
  constructor(t) {
    super(
      false,
      t("projectsAndExperiences.processImageAPI.title"),
      t("projectsAndExperiences.processImageAPI.description"),
      [
        { name: "Python", icon: python },
        { name: "Flask", icon: flask },
        { name: "Redis", icon: redis },
        { name: "RabbitMQ", icon: rabbitmq },
        { name: "Docker", icon: docker },
      ],
      "Github",
      "https://github.com/lucasoliveira04/api-process-image.git",
      null,
      null,
      "Jun 2025",
      [estagio],
      ["backend"]
    );
  }
}
