export class Project {
  constructor(
    positionProject,
    viewProject,
    title,
    description,
    langs,
    github,
    repoUrl,
    visitUrl,
    visit,
    startDate,
    endDate,
    images,
    tags
  ) {
    this.positionProject = positionProject;
    this.viewProject = viewProject;
    this.title = title;
    this.description = description;
    this.langs = langs;
    this.github = github;
    this.repoUrl = repoUrl;
    this.visitUrl = visitUrl;
    this.visit = visit;
    this.startDate = startDate;
    this.endDate = endDate;
    this.images = images;
    this.tags = tags;
  }
}
