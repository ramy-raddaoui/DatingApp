import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
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
  constructor(private authService:AuthService,private alertify: AlertifyService) { }

  ngOnInit() {

  }

  register()
  {
    this.authService.register(this.model).subscribe(result => {
      this.alertify.success("reg successful");
    },error => {
      this.alertify.error(error);
    })  }

  cancel()
  {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}
