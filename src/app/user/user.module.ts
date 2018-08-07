import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { EnrollComponent } from './enroll/enroll.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatProgressBarModule 
} from "@angular/material";

import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  {
    path: 'boss/login',
    component: LoginComponent,
    data: { title: 'admin' }
  },
  {
    path: 'c/login',
    component: LoginComponent,
    data: { title: 'c' }
  },
  {
    path: 'b/login',
    component: LoginComponent,
    data: { title: 'b' }
  },
  {
    path: 'c/enroll',
    component: EnrollComponent,
    data: { title: 'c' }
  },
  {
    path: 'b/enroll',
    component: EnrollComponent,
    data: { title: 'b' }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes,{useHash:true}),
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  providers   : [ { provide: NZ_I18N, useValue: en_US } ],
  declarations: [LoginComponent, EnrollComponent],
  exports:[
    LoginComponent,
    EnrollComponent
  ]
})
export class UserModule { }
