import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Trader } from '../trader';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-trader-list-form',
  templateUrl: './trader-list-form.component.html',
  styleUrls: ['./trader-list-form.component.css']
})
export class TraderListFormComponent {

  trader:Trader = {
    key: '',
    id: 0,
    firstName: '',
    lastName: '',
    dob: '',
    country: '',
    email: '',
    amount: 0
  }


  constructor(public dialogRef: MatDialogRef<TraderListFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Trader) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
