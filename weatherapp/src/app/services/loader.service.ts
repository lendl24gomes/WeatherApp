import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {
  private loaderStatus= false;

  getloaderStatus(): boolean {
    return this.loaderStatus;
  }

  setloaderStatus(value: boolean) {
    this.loaderStatus = value;
  }


  constructor() { }

}
