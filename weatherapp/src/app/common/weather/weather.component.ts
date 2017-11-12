import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { LoaderService } from '../../services/loader.service';
import { Router } from '@angular/router';

  @Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']

})
export class WeatherComponent implements OnInit {
  locations = [];
  weathers = [];
  showtable = false;
  showerror= false;
  errorMsg: string;

  constructor(
              private messageService: MessageService,
              private router: Router,
              private loaderService: LoaderService
              ) {}

  ngOnInit() {
        this.loaderService.setloaderStatus(true);
        this.messageService.getMessages().subscribe( resPolicyData => {
        this.locations = resPolicyData.loc;
        this.weathers = resPolicyData.weathers;
        this.showtable = true;
        this.showerror = false;
        this.loaderService.setloaderStatus(false);
      },
      error => {
        this.errorMsg = 'Please enter a valid address';
        this.showerror = true;
        this.showtable = false;
        this.loaderService.setloaderStatus(false);
      });
  }


  goBack() {
    this.router.navigate(['']);

  }

}
