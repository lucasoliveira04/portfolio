export class Project {
  constructor(
    viewProject,
    title,
    description,
    langs,
    github,
    repoUrl,
    visitUrl,
    visit,
    startDate,
    images,
    tags
  ) {
    this.viewProject = viewProject;
    this.title = title;
    this.description = description;
    this.langs = langs;
    this.github = github;
    this.repoUrl = repoUrl;
    this.visitUrl = visitUrl;
    this.visit = visit;
    this.startDate = startDate;
    this.images = images;
    this.tags = tags;
  }
}
