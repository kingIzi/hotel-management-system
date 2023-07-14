import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsRoutingModule } from './materials-routing.module';
import { TerraceComponent } from './terrace/terrace.component';
import { PoolInventoryComponent } from './pool-inventory/pool-inventory.component';
import { BarLoungeComponent } from './bar-lounge/bar-lounge.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialsRoutingModule],
})
export class MaterialsModule {}
