import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

const routes = {
  allCryptos: (c: CryptoQuery) =>
    `/data/top/mktcapfull?limit=${c.limit}&tsym=${c.fiat}&api_key=641209cc5125f295360f388673546b58ea5e5a6d26846d4b05bd03d61ef8e4f2`,
  // `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key=${this.API_KEY}`;
};

export interface CryptoQuery {
  coin?: string;
  symbol?: string;
  limit?: number;
  fiat?: string;
  api_key?: string;
}

@Injectable({
  providedIn: 'root',
})
export class CryptoDataServiceService {
  API_KEY = '641209cc5125f295360f388673546b58ea5e5a6d26846d4b05bd03d61ef8e4f2';

  defaultQuery: CryptoQuery = {
    coin: 'Bitcoin',
    symbol: 'BTC',
    limit: 10,
    fiat: 'USD',
    api_key: this.API_KEY,
  };

  constructor(private _httpClient: HttpClient) {}

  public getCryptoData(params?: CryptoQuery) {
    if (params) {
      return this._httpClient.get(routes.allCryptos(params)).pipe(
        map((body: any) => body.Data),
        catchError(() => of('Error, couldnt get cryptos'))
      );
    } else {
      return this._httpClient.get(routes.allCryptos(this.defaultQuery)).pipe(
        map((body: any) => body.Data),
        catchError(() => of('Error, couldnt get cryptos'))
      );
    }
  }
}
