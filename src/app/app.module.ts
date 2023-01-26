import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CuteproductItemComponent } from './cuteproduct-item/cuteproduct-item.component';
import { CuteproductlistComponent } from './cuteproductlist/cuteproductlist.component';
import { HttpClientModule } from '@angular/common/http';
import { CutecartComponent } from './cutecart/cutecart.component';
import { CutenesscategoryComponent } from './cutenesscategory/cutenesscategory.component';
import { CuteCategoryListComponent } from './cute-category-list/cute-category-list.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { CuteproductDetailComponent } from './cuteproduct-detail/cuteproduct-detail.component';
import { SearchproductlistComponent } from './searchproductlist/searchproductlist.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path : '', component : CuteproductlistComponent},
  {path: 'category', component:CutenesscategoryComponent},
  {path: 'cart', component:CutecartComponent},
  {path : 'categoryproducts/:category', component :CuteCategoryListComponent},
  {path : 'details/:id', component : CuteproductDetailComponent},
  {path: 'signin', component: SignupComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CuteproductItemComponent,
    CuteproductlistComponent,
    CutecartComponent,
    CutenesscategoryComponent,
    CuteCategoryListComponent,
    ProductSearchComponent,
    CuteproductDetailComponent,
    SearchproductlistComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
