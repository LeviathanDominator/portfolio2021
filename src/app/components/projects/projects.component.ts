import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  pinnedProjects = [];
  projects = [];

  constructor(private dataService: DataService) {
    this.pinnedProjects = dataService.projects;
    dataService.getProjects().subscribe(projects => {
      for (let key of Object.keys(projects)) {
        var project = projects[key];
        if (!project["private"]){ // Hides private projects
          this.projects.push(new Project(project["name"], project["description"], project["html_url"], project["language"], project["updated_at"]));
        }
      }
      this.sortByUpdatedDate();
    });
  }

  ngOnInit() {
  }

  private sortByUpdatedDate() {
    this.projects.sort((a: Project, b: Project) => b.getUpdatedAt().getTime() - a.getUpdatedAt().getTime());
  }

}
