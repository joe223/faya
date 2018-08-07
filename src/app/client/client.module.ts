import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SwiperModule } from '../swiper/swiper.module';

@NgModule({
  imports: [
    CommonModule,
    SwiperModule
  ],
  declarations: [HomeComponent]
})
export class ClientModule { }
