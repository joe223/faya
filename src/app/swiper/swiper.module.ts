import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from './line/line.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations:[
    LineComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbModule.forRoot()
  ],
  exports: [
    LineComponent,
    NgbModule
  ]
})
export class SwiperModule { }
