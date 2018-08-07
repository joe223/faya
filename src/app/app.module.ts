import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AdminModule} from './admin/admin.module'



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


import {ClientModule} from './client/client.module'
import {BusinessModule} from './business/business.module'
import {SwiperModule} from './swiper/swiper.module'

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserModule } from './user/user.module';

import {StoreModule} from './store/store.module'

import {NoopInterceptorService} from './noop-interceptor.service'

const appRoutes: Routes = [
  {
    path: 'books',
    component: BookComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: { title: 'Book Details' }
  },
  {
    path: 'book-create',
    component: BookCreateComponent,
    data: { title: 'Create Book' }
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: { title: 'Edit Book' }
  },
  { path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{useHash:true}),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatProgressBarModule,
    ClientModule,
    BusinessModule,
    SwiperModule,
    AdminModule,
    UserModule,
    StoreModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
