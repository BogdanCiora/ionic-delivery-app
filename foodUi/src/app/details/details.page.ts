import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit, AfterViewInit {
  data = null;
  name: string;

  constructor(
    private http: HttpClient,
    private _route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.http.get("https://devdactic.fra1.digitaloceanspaces.com/foodui/1.json")
      .subscribe(res => {
        this._route.params.subscribe(params => {
          this.name = params['name']; 
        });
        console.log("Name: " + this.name);
        this.data = res;
        console.log(res);
      });
  }

  ngAfterViewInit() {

  }

}
