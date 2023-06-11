import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckOutReservationComponent } from './components/dialogs/check-out-reservation/check-out-reservation.component';
import { PaginationComponent } from './components/utilities/pagination/pagination.component';
import { AddBreakfastCategoryComponent } from './components/dialogs/add-breakfast-category/add-breakfast-category.component';
import { AddBreakfastProductComponent } from './components/dialogs/add-breakfast-product/add-breakfast-product.component';
import { AddBanquetCategoryComponent } from './components/dialogs/add-banquet-category/add-banquet-category.component';
import { AddBanquetProductComponent } from './components/dialogs/add-banquet-product/add-banquet-product.component';
import { AddDrinksFormComponent } from './components/dialogs/add-drinks-form/add-drinks-form.component';
import { AddDessertsFormComponent } from './components/dialogs/add-desserts-form/add-desserts-form.component';
import { AddItemCartComponent } from './components/dialogs/add-item-cart/add-item-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
