import { Component, OnInit } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  index: number = 1;
  intervalEvent: any;

  slideImages: string[] = [
    '../assets/slide1.JPG',
    '../assets/imgs/ban1.jpg',
    '../assets/imgs/ban2.jpg'
  ];

  config: SwiperConfigInterface = {
    direction: 'horizontal',
    initialSlide: 0,
    // autoplay: 1000, 发现不生效
    speed: 500,
    effect: "fade",
    loop: true,
    centeredSlides: true,
    //pagination: true
};


  constructor() { }

  ngOnInit() {
    this.intervalEvent = setInterval(() => {
      if (this.index >= this.slideImages.length - 1) {
        this.index = 0;
      } else {
        this.index = this.index + 1;
      }
      }, 2000);
    }

ngOnDestroy() {
clearInterval(this.intervalEvent);
}

}
