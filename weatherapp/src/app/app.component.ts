import { Component, DoCheck } from '@angular/core';
import { LoaderService } from './services/loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  photo;
  loading: boolean;


  constructor(private loaderService: LoaderService) {
    this.photo = 'https://images5.alphacoders.com/495/495874.jpg';
  }
  ngDoCheck() {
    this.loading = this.loaderService.getloaderStatus();
    console.log(this.loading);
  }
}
