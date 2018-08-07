import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent } from './my/my.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'admin',
    component: MyComponent,
    data: { title: 'admin' }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes,{useHash:true}),
  ],
  declarations: [MyComponent],
  exports:[
    MyComponent
  ]
})
export class AdminModule { }
