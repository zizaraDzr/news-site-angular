import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { TableNewsComponent } from './table-news/table-news.component';
import {HttpClientModule} from "@angular/common/http";
import {TableFilterPipe} from "./shared/table-filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    TableNewsComponent,
    TableFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
