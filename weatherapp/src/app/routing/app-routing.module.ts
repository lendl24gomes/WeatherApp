import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { WeatherComponent } from '../common/weather/weather.component';
import { AddressComponent } from '../common/address/address.component';

const routes: Routes = [
                       {path: '',  component: AddressComponent },
                       {path: 'weather',  component: WeatherComponent }

                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash : false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
