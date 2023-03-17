import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import { MenuComponent } from './page/menu/menu.component';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './page/report/report.component';
import { OrderComponent } from './page/order/order.component';
import { ConfirmboxComponent } from './page/confirmbox/confirmbox.component';
import { OrderresultComponent } from './page/orderresult/orderresult.component';
import { EditorderComponent } from './page/editorder/editorder.component';
import { EditremoveorderComponent } from './page/editremoveorder/editremoveorder.component';

const appRoutes: Routes = [
  { path: '', component: MenuComponent},
  { path: 'report', component: ReportComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ReportComponent,
    OrderComponent,
    ConfirmboxComponent,
    OrderresultComponent,
    EditorderComponent,
    EditremoveorderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatListModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
