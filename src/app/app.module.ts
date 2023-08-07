import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
// import { BasicsPageComponent } from './products/pages/basics-page/basics-page.component';
// import { NumbersPageComponent } from './products/pages/numbers-page/numbers-page.component';
// import { UncommonPagePageComponent } from './products/pages/uncommon-page-page/uncommon-page-page.component';
// configuracion del local de la app
import localEsEc from '@angular/common/locales/es-EC'
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEsEc);
@NgModule({
  declarations: [
    AppComponent,
    // BasicsPageComponent,
    // NumbersPageComponent,
    // UncommonPagePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MenubarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
