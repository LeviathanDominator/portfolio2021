export class Project {
  private title: string;
  private description: string;
  private url: string;
  private language: string;
  private src: string;

  constructor(title: string, description: string, url: string, language: string, src?: string) {
    this.title = title;
    this.description = description;
    this.url = url;
    this.language = language;
    this.src = src;
  }
}
