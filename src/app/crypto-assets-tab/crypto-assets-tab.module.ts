import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CryptoAssetsTabRoutingModule } from './crypto-assets-tab-routing.module';
import { CryptoAssetsTabComponent } from './crypto-assets-tab.component';
import { IonicModule } from '@ionic/angular';
import { CryptoInfoModalComponent } from './components/crypto-info-modal/crypto-info-modal.component';
import { CoinListItemComponent } from './components/coin-list-item/coin-list-item.component';

@NgModule({
  declarations: [CryptoAssetsTabComponent, CryptoInfoModalComponent, CoinListItemComponent],
  imports: [CommonModule, CryptoAssetsTabRoutingModule, IonicModule, FlexLayoutModule],
})
export class CryptoAssetsTabModule {}
