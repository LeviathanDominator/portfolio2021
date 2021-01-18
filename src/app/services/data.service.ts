import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  name = "Ismael";
  firstSurname = "Reyes";
  lastSurname = "Caballero";
  age: number;
  email = "ismaelreyescaballero@gmail.com";
  phone = "601 004 609";
  profilePicture = "../../assets/fotoperfil.png";
  languages = ["Java", "Kotlin", "PHP", "JavaScript", "TypeScript"];
  projects: Project[] = [
    new Project("Pong", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "https://github.com/LeviathanDominator/Pong", this.languages[3]),
    new Project("Proyecto Final de DAM", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "https://github.com/LeviathanDominator/ProyectoFinal", this.languages[4]),
  ];
  url = "https://api.github.com/users/LeviathanDominator/repos";

  constructor(private http: HttpClient) {
    this.age = this.calculateAge(1992, 8, 7);
  }

  getProjects() {
    return this.http.get(`${this.url}`).pipe();
  }

  // Returns full name.
  getFullName() {
    return [this.name, this.firstSurname, this.lastSurname].join(' ');
  }

  // Logic to determine my current age.
  calculateAge(year: number, month: number, day: number) {
    var birthday = new Date(year, month - 1, day);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - birthday.getFullYear();
    if (currentDate.getMonth() < birthday.getMonth()) {
      age--;
    } else if (currentDate.getMonth() == birthday.getMonth()) {
      if (currentDate.getDate() < birthday.getDate()) {
        age--;
      }
    }
    return age;
  }
}
