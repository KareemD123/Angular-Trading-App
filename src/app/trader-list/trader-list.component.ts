import { Component, OnInit } from '@angular/core';
import { TraderListService } from './trader-list.service';
import { Trader } from './trader';
@Component({
  selector: 'app-trader-list',
  templateUrl: './trader-list.component.html',
  styleUrls: ['./trader-list.component.css']
})
export class TraderListComponent implements OnInit {

  //dataSource: String;
  dataSource:Trader[] = [];
  columns:string[] = [];

  constructor(private _traderList: TraderListService) { }

  ngOnInit(): void {
    let traderDataSource = this._traderList.getDataSource();
    let traderColumns = this._traderList.getColumns();
    this.dataSource = traderDataSource;
    this.columns = traderColumns;
    
  }

}
