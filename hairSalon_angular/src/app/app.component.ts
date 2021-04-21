import {Component, OnInit} from '@angular/core';
import {Customer} from './models/Customer';
import {faStore, faStoreAlt, faUser, faUserShield} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  customers: Customer[];
  icons = {
    user: faUser,
    admin: faUserShield,
    store: faStore
  };

  constructor() {
  }

  ngOnInit(): void {
  }
}
