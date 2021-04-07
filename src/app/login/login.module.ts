import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { TabsPageModule } from '../tabs/tabs.module';
import { TabsPageModule2 } from '../tabs2/tabs.module2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    TabsPageModule,
    TabsPageModule2
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
