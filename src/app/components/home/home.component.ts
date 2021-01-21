import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { faTwitterSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  twitter = faTwitterSquare;
  github = faGithubSquare;
  name: string;
  aboutMe: string[];
  age: number;
  location: string;
  profilePicture: string;
  courses = [];
  languages = [];
  frameworks = [];
  githubUrl: string;
  twitterUrl: string;

  constructor(private dataService: DataService) {
    dataService.getProfileData().subscribe(data => {
      this.name = data["name"];
      this.profilePicture = data["avatar_url"];
      this.location = data["location"];
      this.githubUrl = data["html_url"];
      this.twitterUrl = "https://twitter.com/" + data["twitter_username"];
    });
    this.aboutMe = dataService.aboutMe;
    this.age = dataService.age;
    this.courses = dataService.courses;
    this.languages = dataService.languages;
    this.frameworks = dataService.frameworks;
  }

  ngOnInit() {
  }

}
