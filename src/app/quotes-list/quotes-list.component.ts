import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes/quotes.service';
import { Quote } from '../quotes/quote';
@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {

  dataSource: Quote[] = [];
  columns:string[] = [];

  constructor(private _quotesList: QuotesService) { }

  ngOnInit(): void {
    let quotesDataSource = this._quotesList.getDataSource()
    let quotesColumns = this._quotesList.getColumns()
    this.dataSource = quotesDataSource;
    this.columns = quotesColumns;
  }

}
