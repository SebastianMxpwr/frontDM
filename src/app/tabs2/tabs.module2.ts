import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPage2RoutingModule } from './tabs-routing2.module';

import { TabsPage2 } from './tabs.page2';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPage2RoutingModule
  ],
  declarations: [TabsPage2]
})
export class TabsPageModule2 {}
