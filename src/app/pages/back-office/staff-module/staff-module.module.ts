import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffModuleRoutingModule } from './staff-module-routing.module';
import { HistoryComponent } from './history/history.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, StaffModuleRoutingModule],
})
export class StaffModuleModule {}
