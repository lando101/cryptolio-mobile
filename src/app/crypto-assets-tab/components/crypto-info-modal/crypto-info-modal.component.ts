import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ThemeServiceService } from '@app/services/theme-service.service';
import { ModalController } from '@ionic/angular';
import { Coin } from 'src/models/coins.model';
import { Components } from '@ionic/core';
@Component({
  selector: 'app-crypto-info-modal',
  templateUrl: './crypto-info-modal.component.html',
  styleUrls: ['./crypto-info-modal.component.scss'],
})
export class CryptoInfoModalComponent implements OnInit {
  theme: string = '';
  @Input() coin: Coin;
  @Input() modal: Components.IonModal;
  constructor(private themeService: ThemeServiceService, modalCtrl: ModalController) {}

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

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modal.dismiss({
      dismissed: true,
    });
  }
}
