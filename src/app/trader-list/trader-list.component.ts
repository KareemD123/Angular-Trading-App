import { TraderListFormComponent } from './trader-list-form/trader-list-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { TraderListService } from './trader-list.service';
import { Trader } from './trader';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faInfoCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-trader-list',
  templateUrl: './trader-list.component.html',
  styleUrls: ['./trader-list.component.css']
})
export class TraderListComponent implements OnInit {

  //dataSource: String;
  dataSource:Trader[] = [];
  columns:string[] = [];
  faTrashAlt = faTrashAlt;
  faInfoCircle=faInfoCircle;
  faPlusCircle=faPlusCircle

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

  constructor(private _traderList: TraderListService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this._traderList.getDataSource().subscribe(traderDataSource => {
      this.dataSource = traderDataSource;
    });
    let traderColumns = this._traderList.getColumns();
    this.columns = traderColumns;
  }

  deleteTrader(event: Event, id:number): void {
    try {
      this._traderList.deleteTrader(id)
      this.ngOnInit();
    } catch (err) {
      console.log(err)
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TraderListFormComponent, {
      width: '40vw',
      data: {
        key: this.trader.key,
        id: this.trader.id,
        firstName: this.trader.firstName,
        lastName: this.trader.lastName,
        dob: this.trader.dob,
        country: this.trader.country,
        email: this.trader.email
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      //debugger
      if (result) {
        this._traderList.createTrader(result).then(res => {
          //this.ngOnInit()
          console.log(result)
          let traderDataSource = this._traderList.getDataSource();
          this._traderList.getDataSource().subscribe(traderDataSource => {
            this.dataSource = traderDataSource
            // this.dataSource = traderDataSource;
          })
          
          let traderColumns = this._traderList.getColumns();
          this.columns = traderColumns;
        })
      }
    })
  }

}
