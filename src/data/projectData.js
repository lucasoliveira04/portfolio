import { Deckify } from "../model/projects/subclasses/deckify";
import { DesenvolvedorJrJava } from "../model/projects/subclasses/desenvolvedorJrJava";
import { EstagioPlanetEco } from "../model/projects/subclasses/estagioPlanetEco";
import { NossoMarSalveOsPatinhos } from "../model/projects/subclasses/nossoMarSalveOsPatinhos";
import { ProcessImageApi } from "../model/projects/subclasses/processImageAPI";

export function getProjects(t) {
  const projects = [
    new DesenvolvedorJrJava(t, 1),
    new EstagioPlanetEco(t, 2),
    new NossoMarSalveOsPatinhos(t, 3),
    // new ProcessImageApi(t, 4),
    new Deckify(t, 5)
  ]

  return projects;
}
