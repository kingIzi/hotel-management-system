import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodProductionsComponent } from './food-productions.component';

const routes: Routes = [
  {
    path: '',
    component: FoodProductionsComponent,
    children: [
      {
        path: '',
        redirectTo: 'breakfast',
        pathMatch: 'full',
      },
      {
        path: 'breakfast',
        loadComponent: () =>
          import('./breakfast/breakfast.component').then(
            (m) => m.BreakfastComponent
          ),
      },
      {
        path: 'dinner',
        loadComponent: () =>
          import('./dinner/dinner.component').then((m) => m.DinnerComponent),
      },
      {
        path: 'drinks',
        loadComponent: () =>
          import('./drinks/drinks.component').then((m) => m.DrinksComponent),
      },
      {
        path: 'desserts',
        loadComponent: () =>
          import('./desserts/desserts.component').then(
            (m) => m.DessertsComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodProductionsRoutingModule {}
