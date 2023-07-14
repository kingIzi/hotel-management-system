import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontalOfficeRoutingModule } from './frontal-office-routing.module';
import { FrontalOfficeComponent } from './frontal-office.component';
import { ExplorationComponent } from './exploration/exploration.component';
import { HouseKeepingComponent } from './house-keeping/house-keeping.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, FrontalOfficeRoutingModule],
})
export class FrontalOfficeModule {}
