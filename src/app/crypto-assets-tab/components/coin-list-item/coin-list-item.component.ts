import { Component, Input, OnInit } from '@angular/core';
import { Coin } from 'src/models/coins.model';

@Component({
  selector: 'app-coin-list-item',
  templateUrl: './coin-list-item.component.html',
  styleUrls: ['./coin-list-item.component.scss'],
})
export class CoinListItemComponent implements OnInit {
  @Input() coin: Coin;
  @Input() theme: string;

  constructor() {}

  ngOnInit(): void {}
}
