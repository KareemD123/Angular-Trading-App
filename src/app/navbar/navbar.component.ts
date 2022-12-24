import { Component, OnInit } from '@angular/core';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faMoneyBillAlt = faMoneyBillAlt
  faAddressBook = faAddressBook
  faUser = faUser

 
  constructor() { }

  ngOnInit(): void {
  }

}
