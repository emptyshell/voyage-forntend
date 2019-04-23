import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//bootstrap
import { AppNavComponent } from './app-nav/app-nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';

import { SwiperModule } from 'angular2-useful-swiper';
import { HolidayPackNavComponent } from './holiday-pack-nav/holiday-pack-nav.component';
import { FormsModule } from '@angular/forms';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    CarouselComponent,
    HolidayPackNavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    SwiperModule,
    FormsModule,
    DlDateTimeDateModule,  // <--- Determines the data type of the model
    DlDateTimePickerModule
  ],
  providers: [FormsModule],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
