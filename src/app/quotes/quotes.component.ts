import { Component, OnInit } from '@angular/core';
import { QuotesService } from './quotes.service';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  
  quote: string = '';

  constructor(private _quote: QuotesService) { }


  ngOnInit(): void {
  }

  addQuote() {
    this._quote.getQuote(this.quote).subscribe(data => {
      console.log(data)
      // this._quote.addQuote(data)
    })
  }

}
