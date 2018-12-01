import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Our imports
import { HttpClientModule } from  '@angular/common/http';
import {RouterModule, Routes} from "@angular/router";
// material imports --> frontend
import {MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule} from '@angular/material';
import { QrComponent } from './qr/qr.component';
import {NavComponent} from './nav/nav.component';
import { QrOkComponent } from './qr-ok/qr-ok.component';
import { RecargaComponent } from './recarga/recarga.component';

const appRoutes: Routes = [
  { path: '', component: QrOkComponent },
  { path: 'qr_ok', component: QrOkComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    QrComponent,
    NavComponent,
    QrOkComponent,
    RecargaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
