import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [NewsComponent],
  imports: [CommonModule, NewsRoutingModule, IonicModule, TranslateModule],
})
export class NewsModule {}
