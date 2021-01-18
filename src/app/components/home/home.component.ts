import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private fullName: string;
  private age: number;
  private profilePicture: string;
  private languages = [];

  constructor(private dataService: DataService) {
    this.fullName = dataService.getFullName();
    this.age = dataService.age;
    this.profilePicture = dataService.profilePicture;
    this.languages = dataService.languages;
  }

  ngOnInit() {
  }

}
