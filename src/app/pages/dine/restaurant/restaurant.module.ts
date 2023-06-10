import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';
import { CommandComponent } from './command/command.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, RestaurantRoutingModule],
})
export class RestaurantModule {}
