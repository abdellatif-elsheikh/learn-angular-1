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
import { ContainerComponent } from './container/container.component';
import { SearchProductComponent } from './container/search-product/search-product.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductDetailsComponent } from './container/product-details/product-details.component';
import { FeaturedBrandsComponent } from './container/featured-brands/featured-brands.component';
import { SetBackgroundDirective } from './Directives/set-background.directive';
import { HighlightDirective } from './Directives/highlight.directive';
import { AppHoverDirective } from './Directives/app-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MenuComponent,
    LogoComponent,
    SearchComponent,
    ContainerComponent,
    SearchProductComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailsComponent,
    FeaturedBrandsComponent,
    SetBackgroundDirective,
    HighlightDirective,
    AppHoverDirective,
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
