import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menue/top-menu.component';
import { MenuComponent } from './header/menu/menu.component';
import { LogoComponent } from './header/logo/logo.component';
import { SearchComponent } from './header/search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchProductComponent } from './product-list/search-product/search-product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MenuComponent,
    LogoComponent,
    SearchComponent,
    ProductListComponent,
    SearchProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
