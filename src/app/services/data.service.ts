import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  age: number;
  phone = "601 004 609";
  aboutMe = ["Estoy buscando trabajo como desarrollador, tanto de aplicaciones para escritorio y móviles como de paginas web.", "No tengo experiencia laboral, pero he estado trabajando en diversos proyectos personales con distintas tecnologías para mejorar mis conocimientos de programación.", "Me entusiasma la programación; siempre estoy aprendiendo nuevas tecnologías y tengo mucha imaginación. Puedo trabajar en equipo y aportar nuevas ideas a los proyectos.", "Además, tengo disponibilidad absoluta para viajar a cualquier lugar de España."];
  courses = ["Desarrollo de Aplicaciones Multiplataforma 2018 - 2020", "Bachillerato de Ciencias 2016 - 2018"];
  languages = ["Java", "Kotlin", "PHP", "JavaScript", "TypeScript", "Python", "SQL"];
  frameworks = ["AngularJS", "Ionic", "React", "Spring", "Symfony"]
  projects: Project[] = [
    new Project("Pong", "Utilizando el framework P5.js he creado un juego de Pong muy sencillo para dos jugadores. ¡Pulsa en el botón para jugarlo!", "https://github.com/LeviathanDominator/Pong", this.languages[3]),
    new Project("Proyecto Final de DAM", "Mi idea para el proyecto de fin de grado consiste en una aplicación sobre videojuegos cuyo objetivo es filtrarlos no solo por plataforma o género, sino también por tipos de micropagos. Actualmente gran cantidad de videojuegos dispone de métodos de pago adicionales a la compra del juego en sí para agregar contenido a dicho videojuego. Este método de categorización puede resultar útil a las personas que quieran tener una experiencia completa o padres que preocupados porque sus hijos puedan utilizar el dinero de su tarjeta para comprar contenido digital adicional. Esta aplicación utiliza un sistema de sugerencias para que los usuarios apliquen las etiquetas correspondientes a un videojuego, de esa forma la información se actualizará gracias al aporte de los usuarios que utilicen la aplicación. Además, se pueden crear y gestionar listas de videojuegos personalizadas para cada usuario, y tiene un sistema de mensajería para que los usuarios se puedan comunicar entre ellos.", "https://github.com/LeviathanDominator/ProyectoFinal", this.languages[4]),
  ];
  url = "https://api.github.com/users/LeviathanDominator";

  constructor(private http: HttpClient) {
    this.age = this.calculateAge(1992, 8, 7);
  }

  getProfileData() {
    return this.http.get(`${this.url}`).pipe();
  }

  getProjects() {
    return this.http.get(`${this.url}/repos`).pipe();
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
