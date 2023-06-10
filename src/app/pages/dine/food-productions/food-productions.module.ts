import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodProductionsRoutingModule } from './food-productions-routing.module';
import { FoodProductionsComponent } from './food-productions.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { DinnerComponent } from './dinner/dinner.component';
import { DrinksComponent } from './drinks/drinks.component';
import { DessertsComponent } from './desserts/desserts.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, FoodProductionsRoutingModule],
})
export class FoodProductionsModule {}
