import { Trader } from './../trader-list/trader';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TraderListService } from '../trader-list/trader-list.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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

  amount: number = 0;

  constructor(private _route: ActivatedRoute, private _traderList: TraderListService) { }

  ngOnInit(): void {
    this._route.params.subscribe(data => {
      console.log('params', data.id)
      this._traderList.getTrader(data.id).subscribe(trader => {
        // console.log(trader)
        this.trader = trader
      })
    })
  }

  depositFunds(): void {
    this._traderList.depositFunds(this.trader.id, this.amount).subscribe((data:any) => {
      console.log(data)
    })
  }
  
  withdrawFunds(): void {
    this._traderList.withdrawFunds(this.trader.id, this.amount).subscribe((data:any) => {
      console.log(data)
    })
  }

}
