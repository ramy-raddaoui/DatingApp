import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromHome : any;
  model : any = {};
  @Output() cancelRegister = new EventEmitter();
  constructor(private authService:AuthService) { }

  ngOnInit() {

  }

  register()
  {
    this.authService.register(this.model).subscribe(result => {
      console.log("reg successful");
    },error => {
      console.log(error);
    })  }

  cancel()
  {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}
