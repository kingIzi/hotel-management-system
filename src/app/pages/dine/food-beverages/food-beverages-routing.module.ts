import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodBeveragesComponent } from './food-beverages.component';

const routes: Routes = [{ path: '', component: FoodBeveragesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodBeveragesRoutingModule { }
