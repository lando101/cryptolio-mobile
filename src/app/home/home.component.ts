import { Component, OnInit } from '@angular/core';
import { CryptoDataServiceService } from '@app/services/crypto-data-service.service';
import { finalize } from 'rxjs/operators';
import { Coin } from 'src/models/coins.model';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;

  constructor(private quoteService: QuoteService, private cryptoService: CryptoDataServiceService) {}

  ngOnInit() {
    this.isLoading = true;
    // this.quoteService
    //   .getRandomQuote({ category: 'dev' })
    //   .pipe(
    //     finalize(() => {
    //       this.isLoading = false;
    //     })
    //   )
    //   .subscribe((quote: string) => {
    //     this.quote = quote;
    //   });

    this.cryptoService
      .getCryptoData()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((data: Coin) => {
        console.log(data);
      });
  }
}
