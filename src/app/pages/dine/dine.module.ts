import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DineRoutingModule } from './dine-routing.module';
import { DineComponent } from './dine.component';
import { FoodBeveragesComponent } from './food-beverages/food-beverages.component';
import { ExploreComponent } from './explore/explore.component';
import { FoodProductionComponent } from './food-production/food-production.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, DineRoutingModule],
})
export class DineModule {}
