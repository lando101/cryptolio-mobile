import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { ModalController } from '@ionic/angular';
import { CryptoInfoModalComponent } from './crypto-info-modal/crypto-info-modal.component';

@Component({
  selector: 'app-crypto-assets-tab',
  templateUrl: './crypto-assets-tab.component.html',
  styleUrls: ['./crypto-assets-tab.component.scss'],
})
export class CryptoAssetsTabComponent implements OnInit {
  filters: string[] = ['Market Cap Asc', 'Market Cap Desc', 'Top Gains', 'Top Losses', 'Price'];
  constructor(private pickerController: PickerController, public modalCtrl: ModalController) {}

  ngOnInit(): void {}
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

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: CryptoInfoModalComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      presentingElement: await this.modalCtrl.getTop(),
    });
    return await modal.present();
  }
}
