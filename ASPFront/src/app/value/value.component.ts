import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent implements OnInit {

  constructor(public http: HttpClient) { }
  values : any;
  ngOnInit() {
    this.getValues();
  }

  getValues()
  {
    this.http.get("https://localhost:5001/api/Values").subscribe(response=>{
      this.values=response;
    },error => {
      console.log(error)
    })
  }

}
