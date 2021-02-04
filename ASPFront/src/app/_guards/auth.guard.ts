import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public authService:AuthService,public router:Router,public alertify:AlertifyService){}
  canActivate(): boolean {
    if (this.authService.isLoggedIn())
      return true;

    this.alertify.error("You are not authorized to access to this resource");
    this.router.navigate(['/home']);
    return false;
  }
  
}
