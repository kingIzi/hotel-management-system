import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from './back-office.component';
import { ExploreComponent } from './explore/explore.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, BackOfficeRoutingModule],
})
export class BackOfficeModule {}
