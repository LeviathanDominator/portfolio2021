import { Component, OnInit } from '@angular/core';
import { faHome, faToolbox, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  homeIcon = faHome;
  projectsIcon = faToolbox;
  contactIcon = faUser;

  constructor() { }

  ngOnInit() {
  }

}
