import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './@Views/home/home.component';
import { OtherComponent } from './@Views/other/other.component';
import { BookComponent } from './@Views/other/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
