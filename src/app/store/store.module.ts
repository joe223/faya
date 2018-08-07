import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RootService} from './root.service'

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[],
  declarations: [],
  providers:[RootService]
})
export class StoreModule { }
