import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { TableNewsComponent } from './table-news/table-news.component';
import { HttpClientModule } from "@angular/common/http";
import { TableFilterPipe } from "./shared/table-filter.pipe";
import { FullNewsComponent } from './full-news/full-news.component';
import { Routes, RouterModule } from "@angular/router";
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {TableFormatDatePipe} from "./shared/table-format-date.pipe";

registerLocaleData(localeRu, 'ru');

const appRoutes: Routes= [
  { path: '', component: TableNewsComponent },
  { path: 'fullNews/:id', component: FullNewsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TableNewsComponent,
    TableFilterPipe,
    TableFormatDatePipe,
    FullNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
