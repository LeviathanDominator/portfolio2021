import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email: string;
  phone: string;

  constructor(private dataService: DataService) {
    this.dataService.getProfileData().subscribe(data => {
      if (data["email"]){
      this.email = data["email"];
    } else {
      this.email = "ismaelreyescaballero@gmail.com";
    }
    });
    this.phone = dataService.phone;
  }

  ngOnInit() {
  }

}
