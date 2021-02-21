import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { CryptoAssetsTabComponent } from './crypto-assets-tab.component';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    // { path: '', redirectTo: '/assets', pathMatch: 'full' },
    { path: 'assets', component: CryptoAssetsTabComponent, data: { title: marker('Assets') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoAssetsTabRoutingModule {}
