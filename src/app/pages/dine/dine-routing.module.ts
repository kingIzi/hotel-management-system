import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DineComponent } from './dine.component';

const routes: Routes = [
  {
    path: 'explore',
    component: DineComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./explore/explore.component').then((m) => m.ExploreComponent),
      },
      {
        path: 'production',
        loadChildren: () =>
          import('./food-productions/food-productions.module').then(
            (m) => m.FoodProductionsModule
          ),
      },
      {
        path: 'restaurant',
        loadChildren: () =>
          import('./restaurant/restaurant.module').then(
            (m) => m.RestaurantModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DineRoutingModule {}
