import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private email: string;
  private phone: string;

  constructor(private dataService: DataService) {
    this.email = dataService.email;
    this.phone = dataService.phone;
  }

  ngOnInit() {
  }

}
