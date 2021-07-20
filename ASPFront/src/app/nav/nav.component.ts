import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  model : any = {};
  photoUrl: string;
  constructor(public authService:AuthService,private alertify: AlertifyService,public router:Router) { }

  ngOnInit() {
    this.authService.currentPhotoUrl.subscribe(photo => this.photoUrl = photo);
  }

  login()
  {
   this.authService.login(this.model).subscribe(next => {
     this.alertify.success("Logged in successfully")
   },error => {
    this.alertify.error(error)
   },()=>{
     this.router.navigate(['/members']);
   })
  }

  loggedIn(): boolean {
   return this.authService.isLoggedIn();
  }

  logout()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken=null;
    this.authService.currentUser=null;
    this.alertify.message('logged out'); 
    this.router.navigate(['/home']);
  }

}
