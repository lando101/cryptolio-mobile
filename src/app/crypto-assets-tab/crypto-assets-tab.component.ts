import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { ModalController } from '@ionic/angular';
import { CryptoInfoModalComponent } from './components/crypto-info-modal/crypto-info-modal.component';
import { CryptoDataServiceService, CryptoQuery } from '@app/services/crypto-data-service.service';
import { finalize } from 'rxjs/operators';
import { Coin } from 'src/models/coins.model';
import { ThemeServiceService } from '@app/services/theme-service.service';

@Component({
  selector: 'app-crypto-assets-tab',
  templateUrl: './crypto-assets-tab.component.html',
  styleUrls: ['./crypto-assets-tab.component.scss'],
})
export class CryptoAssetsTabComponent implements OnInit {
  filters: string[] = ['Market Cap Asc', 'Market Cap Desc', 'Top Gains', 'Top Losses', 'Price'];
  isLoading: boolean;
  coins: Coin[] = [];
  filteredCoins: Coin[] = [];
  theme: string = '';

  defaultQuery: CryptoQuery = {
    coin: 'Bitcoin',
    symbol: 'BTC',
    limit: 100,
    fiat: 'USD',
  };

  constructor(
    private pickerController: PickerController,
    public modalCtrl: ModalController,
    private cryptoService: CryptoDataServiceService,
    private themeService: ThemeServiceService
  ) {}

  ngOnInit(): void {
    this.getCryptosList();
    this.themeService.themeTypeBS.subscribe((data: any) => {
      if (data) {
        this.theme = data;
      }
    });
  }

  getCryptosList() {
    this.isLoading = true;
    this.cryptoService
      .getCryptoData(this.defaultQuery)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((data) => {
        // console.log(data);
        data.forEach((element: Coin) => {
          this.coins.push(element);
        });
        console.log(this.coins);
      });
  }

  async showPicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Ok',
          handler: (value: any) => {
            console.log(value);
          },
        },
      ],
      columns: [
        {
          name: 'Sort By',
          options: this.getColumnOptions(),
        },
      ],
    };

    let picker = await this.pickerController.create(options);
    picker.present();
  }

  getColumnOptions() {
    let options: { text: string; value: string }[] = [];
    this.filters.forEach((x) => {
      options.push({ text: x, value: x });
    });
    return options;
  }

  async presentModal(coin: Coin) {
    const modal = await this.modalCtrl.create({
      component: CryptoInfoModalComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        coin: coin,
      },
      swipeToClose: true,
      presentingElement: await this.modalCtrl.getTop(),
    });
    return await modal.present();
  }
}
