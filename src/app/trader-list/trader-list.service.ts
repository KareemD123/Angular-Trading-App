import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trader } from './trader';

@Injectable({
  providedIn: 'root'
})
export class TraderListService {

  traderList:Trader[] = [
    {
      key: '1',
      id: 1,
      firstName: 'Mike',
      lastName: 'Spencer',
      dob: new Date().toLocaleDateString(),
      country: 'Canada',
      email: 'mike@test.com',
      actions: `<button (click)="deleteTrader">Delete Trader</button>`
    },
    {
        key: '2',
        id: 2,
        firstName: 'Hellen',
        lastName: 'Miller',
        dob: new Date().toLocaleDateString(),
        country: 'Austria',
        email: 'hellen@test.com',
        actions: 'delete'
    }
  ]

  constructor() { }

  randomizeIdKey(): number {
    return Math.floor(Math.random() * 999) + 30
  }

  getDataSource(): Trader[]{
    return this.traderList
  }

  deleteTrader(traderId:number): void {
    debugger
    const index:number = this.traderList.findIndex(t => t.id == traderId)
    if (index > -1) {
      this.traderList.splice(index, 1)
    }

  }

  createTrader(newTrader:Trader): Promise<any> {
    newTrader.id = this.randomizeIdKey()
    newTrader.key = this.randomizeIdKey().toString()
    this.traderList.push(newTrader)
    return Promise.resolve({message: "Success!"})
  }

  getColumns(): string[] {
    return ['First Name', 'Last Name', 'Email', 'DateOfBirth', 'Country', 'Actions']
  }
}
