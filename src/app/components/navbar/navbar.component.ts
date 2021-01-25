import { Component, OnInit } from '@angular/core';
import { faHome, faToolbox, faUser, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  homeIcon = faHome;
  projectsIcon = faToolbox;
  contactIcon = faUser;
  warningIcon = faExclamationTriangle;
  underConstruction: boolean;

  constructor(private dataService: DataService) {
    this.underConstruction = dataService.underConstruction;
  }

  ngOnInit() {
  }

}
