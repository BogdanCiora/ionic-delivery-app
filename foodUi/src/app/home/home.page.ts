import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  categories = [];
  highlights = [];
  featured = [];

  catSlideOpts = {
    freeMode: true,
    slidesPerView: 3.5,
    slidesOffsetBefore: 11,
    spaceBetween: 10
  };

  highlightSlideOpts = {
    centerSlides: true,
    loop: true,
    slidesPerView: 1.05,
    slidesOffsetBefore: 11,
    spaceBetween: 10
  };

  featuredSlidesOpts = {
    freeMode: true,
    slidesPerView: 1.2,
    spaceBetween: 10
  };

  showLocationDetail = false;

  constructor(
    private http: HttpClient,
    private _router: Router,
    ) {}
  
  ngOnInit() {
    this.http.get('https://devdactic.fra1.digitaloceanspaces.com/foodui/home.json')
      .subscribe((res : any) => {
        console.log(res);

        this.categories = res.categories;
        this.highlights = res.highlights;
        this.featured = res.featured;
      });
    
  }

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  onScroll(event) {
    const offset = event.detail.scrollTop;
    this.showLocationDetail = offset > 50;
  }

  navigateToPage(name: string) {
    this._router.navigate(['/details']);
  }

}
