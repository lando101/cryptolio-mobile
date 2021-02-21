import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ThemeServiceService } from '@app/services/theme-service.service';
import { Coin } from 'src/models/coins.model';

@Component({
  selector: 'app-crypto-info-modal',
  templateUrl: './crypto-info-modal.component.html',
  styleUrls: ['./crypto-info-modal.component.scss'],
})
export class CryptoInfoModalComponent implements OnInit {
  theme: string = '';
  @Input() coin: Coin;

  constructor(private themeService: ThemeServiceService) {}

  ngOnInit(): void {
    this.themeService.themeTypeBS.subscribe((data: any) => {
      if (data) {
        this.theme = data;
      }
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(this.coin);
  }
}
