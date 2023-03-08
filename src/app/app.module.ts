import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { AngularSplitModule } from "angular-split";
import {MatListModule} from "@angular/material/list";
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import { MenuComponent } from './page/menu/menu.component';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './page/report/report.component';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatSelectModule,
    AngularSplitModule,
    MatListModule,
    MatDialogModule,
    MatButtonToggleModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
