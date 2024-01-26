import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainAppMenuPageRoutingModule } from './main-app-menu-routing.module';

import { MainAppMenuPage } from './main-app-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainAppMenuPageRoutingModule
  ],
  declarations: [MainAppMenuPage],
  exports: [MainAppMenuPage]
})
export class MainAppMenuPageModule {}
