///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { MessageService } from '../../services/message.service';
import { Router } from '@angular/router';

  @Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {


  constructor(private messageService: MessageService,
              private router: Router) {

  }

  userForm= new FormGroup({
    address: new FormControl('', Validators.required),
  });


  onSubmit() {
    this.messageService.myForm = this.userForm.value;
    this.router.navigate(['weather']);
  }

}
