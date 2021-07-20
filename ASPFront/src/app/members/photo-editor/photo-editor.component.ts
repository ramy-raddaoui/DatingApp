import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Photo } from 'src/app/_models/photo';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.scss']
})
export class PhotoEditorComponent implements OnInit {
  @Input() photos : Photo [];
  @Output() getMemberPhotoChange = new EventEmitter<string>();
  hasBaseDropZoneOver:boolean = false;
  hasAnotherDropZoneOver:boolean = false;
  response:string;
  currentMain : Photo;
  constructor(private alertify: AlertifyService,
              private authService: AuthService,
              private userService: UserService) { }

  ngOnInit() {
  }

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
  setMainPhoto(photo: Photo) {
    this.userService.setPhotoMain(this.authService.decodedToken.nameid, photo.id).subscribe(
      () => {
        console.log("Successfully set to main");
        this.currentMain = this.photos.filter(p => p.isMain === true)[0];
        this.currentMain.isMain = false;
        photo.isMain = true;
        this.authService.changeMemberPhoto(photo.url);
        this.authService.currentUser.photoUrl=photo.url;
        localStorage.setItem('user',JSON.stringify(this.authService.currentUser));
        /*this.authService.changeMemberPhoto(photo.url);
        this.authService.currentUser.photoUrl = photo.url;
        localStorage.setItem('user', JSON.stringify(this.authService.currentUser));
        */
      }, error => {
        this.alertify.error(error);
        console.log('Error on setMainPhoto');
      }
    );
  }
  deletePhoto(id: number) {
    this.alertify.confirm('Are you sure you want to delete this photo?', () => {
      this.userService
        .deletePhoto(this.authService.decodedToken.nameid, id)
        .subscribe(
          () => {
            this.photos.splice(this.photos.findIndex(p => p.id === id), 1);
            this.alertify.success('Photo has been deleted');
          },
          error => {
            this.alertify.error('Failed to delete the photo');
          }
        );
    });
  }

}
