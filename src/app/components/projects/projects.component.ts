import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  private pinnedProjects = [];
  private projects = [];

  constructor(private dataService: DataService) {
    this.pinnedProjects = dataService.projects;
    dataService.getProjects().subscribe(projects => {
      projects.forEach(project => {
        console.log(project);
        this.projects.push(new Project(project["name"], project["description"], project["url"], project["language"]));
      });
    });
  }

  ngOnInit() {
  }

}
