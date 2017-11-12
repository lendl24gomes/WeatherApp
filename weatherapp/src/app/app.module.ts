import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { MessageService } from './services/message.service';
import { HttpModule} from '@angular/http';
import { AppRoutingModule } from './routing/app-routing.module';
import { LoaderService } from './services/loader.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { WeatherComponent } from './common/weather/weather.component';
import { AddressComponent } from './common/address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WeatherComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpModule, AppRoutingModule
  ],
  providers: [MessageService, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
