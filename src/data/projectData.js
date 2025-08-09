import { ProcessImageApi } from "../model/subclasses/processImageAPI";

export function getProjects(t) {
  return [new ProcessImageApi(t)];
}
