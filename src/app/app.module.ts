import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckOutReservationComponent } from './components/dialogs/check-out-reservation/check-out-reservation.component';
import { PaginationComponent } from './components/utilities/pagination/pagination.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
