"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var book_component_1 = require("./book/book.component");
var book_detail_component_1 = require("./book-detail/book-detail.component");
var book_create_component_1 = require("./book-create/book-create.component");
var book_edit_component_1 = require("./book-edit/book-edit.component");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var appRoutes = [
    {
        path: 'books',
        component: book_component_1.BookComponent,
        data: { title: 'Book List' }
    },
    {
        path: 'book-details/:id',
        component: book_detail_component_1.BookDetailComponent,
        data: { title: 'Book Details' }
    },
    {
        path: 'book-create',
        component: book_create_component_1.BookCreateComponent,
        data: { title: 'Create Book' }
    },
    {
        path: 'book-edit/:id',
        component: book_edit_component_1.BookEditComponent,
        data: { title: 'Edit Book' }
    },
    { path: '',
        redirectTo: '/books',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                book_component_1.BookComponent,
                book_detail_component_1.BookDetailComponent,
                book_create_component_1.BookCreateComponent,
                book_edit_component_1.BookEditComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
            ],
            imports: [
                router_1.RouterModule.forRoot(appRoutes, { useHash: true }),
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatInputModule,
                material_1.MatTableModule,
                material_1.MatPaginatorModule,
                material_1.MatSortModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatIconModule,
                material_1.MatButtonModule,
                material_1.MatCardModule,
                material_1.MatFormFieldModule,
                material_1.MatToolbarModule,
                material_1.MatProgressBarModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map