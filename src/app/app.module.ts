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

@NgModule({
  declarations: [],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
