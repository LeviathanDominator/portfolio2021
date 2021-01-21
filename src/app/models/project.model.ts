export class Project {
  private title: string;
  private description: string;
  private description_short: string;
  private url: string;
  private language: string;
  private updated_at: Date;
  private src: string;

  constructor(title: string, description: string, url: string, language: string, updated_at?: string, description_short?: string, src?: string) {
    this.title = title;
    this.description = description;
    this.description_short = description_short;
    this.url = url;
    this.language = language;
    if (updated_at) {
       this.updated_at = new Date(updated_at);
     }
    this.src = src;
  }

  getUpdatedAt() {
    return this.updated_at;
  }

}
