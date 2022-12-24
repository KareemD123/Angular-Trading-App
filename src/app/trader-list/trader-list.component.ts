import { TraderListFormComponent } from './trader-list-form/trader-list-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { TraderListService } from './trader-list.service';
import { Trader } from './trader';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
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

  trader:Trader = {
    key: '',
    id: 0,
    firstName: '',
    lastName: '',
    dob: '',
    country: '',
    email: ''
  }

  constructor(private _traderList: TraderListService, public dialog: MatDialog) { }

  ngOnInit(): void {
    let traderDataSource = this._traderList.getDataSource();
    let traderColumns = this._traderList.getColumns();
    this.dataSource = traderDataSource;
    this.columns = traderColumns;
  }

  deleteTrader(event: Event, id:number): void {
    try {
      this._traderList.deleteTrader(id)
    } catch (err) {
      console.log(err)
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TraderListFormComponent, {
      width: '350px',
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
          let traderColumns = this._traderList.getColumns();
          this.dataSource = traderDataSource;
            this.columns = traderColumns;
        })
      }
    })
  }

}
