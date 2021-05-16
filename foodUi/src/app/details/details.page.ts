import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit, AfterViewInit {
  data = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://devdactic.fra1.digitaloceanspaces.com/foodui/1.json")
      .subscribe(res => {
        this.data = res;
        console.log(res);
      });
  }

  ngAfterViewInit() {

  }

}
