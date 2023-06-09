import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DineRoutingModule } from './dine-routing.module';
import { DineComponent } from './dine.component';
import { ExploreComponent } from './explore/explore.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, DineRoutingModule],
})
export class DineModule {}
