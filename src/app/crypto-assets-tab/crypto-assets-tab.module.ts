import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoAssetsTabRoutingModule } from './crypto-assets-tab-routing.module';
import { CryptoAssetsTabComponent } from './crypto-assets-tab.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CryptoAssetsTabComponent],
  imports: [CommonModule, CryptoAssetsTabRoutingModule, IonicModule],
})
export class CryptoAssetsTabModule {}
