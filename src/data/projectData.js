import { Deckify } from "../model/subclasses/deckify";
import { DesenvolvedorJrJava } from "../model/subclasses/desenvolvedorJrJava";
import { EstagioPlanetEco } from "../model/subclasses/estagioPlanetEco";
import { NossoMarSalveOsPatinhos } from "../model/subclasses/nossoMarSalveOsPatinhos";
import { ProcessImageApi } from "../model/subclasses/processImageAPI";

export function getProjects(t) {
  const projects = [
    new DesenvolvedorJrJava(t, 1),
    new EstagioPlanetEco(t, 2),
    new NossoMarSalveOsPatinhos(t, 3),
    new ProcessImageApi(t, 4),
    new Deckify(t, 5)
  ]

  return projects;
}
