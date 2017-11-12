import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";


@Injectable()
export class MessageService {

  myForm;
  constructor(private http: Http) {}

  getMessages() {
    const body = JSON.stringify(this.myForm);
    console.log(body);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:2400/weather',body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        if (error.status==503)
        {
          console.log("Timed out");
        }
        return Observable.throw(error)
      });
  }

/*  getMessages(form) {
    const body = JSON.stringify(form);
    console.log(body);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:2400/weather',body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        if (error.status==503)
        {
          console.log("Timed out");
        }
        return Observable.throw(error)
      });
  }*/

}
