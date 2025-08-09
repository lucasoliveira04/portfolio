import { EstagioPlanetEco } from "../model/subclasses/estagioPlanetEco";
import { ProcessImageApi } from "../model/subclasses/processImageAPI";

export function getProjects(t) {
  return [new ProcessImageApi(t), new EstagioPlanetEco(t)];
}
