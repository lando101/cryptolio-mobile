import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoAssetsTabRoutingModule } from './crypto-assets-tab-routing.module';
import { CryptoAssetsTabComponent } from './crypto-assets-tab.component';
import { IonicModule } from '@ionic/angular';
import { CryptoInfoModalComponent } from './crypto-info-modal/crypto-info-modal.component';

@NgModule({
  declarations: [CryptoAssetsTabComponent, CryptoInfoModalComponent],
  imports: [CommonModule, CryptoAssetsTabRoutingModule, IonicModule],
})
export class CryptoAssetsTabModule {}
