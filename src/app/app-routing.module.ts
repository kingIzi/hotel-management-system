import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./components/layouts/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'pages/fontal-office',
    loadChildren: () =>
      import('./pages/frontal-office/frontal-office.module').then(
        (m) => m.FrontalOfficeModule
      ),
  },
  {
    path: 'pages/dine',
    loadChildren: () =>
      import('./pages/dine/dine.module').then((m) => m.DineModule),
  },
  {
    path: 'pages/dine/food-productions',
    loadChildren: () =>
      import('./pages/dine/food-productions/food-productions.module').then(
        (m) => m.FoodProductionsModule
      ),
  },
  {
    path: 'pages/dine/restaurant',
    loadChildren: () =>
      import('./pages/dine/restaurant/restaurant.module').then(
        (m) => m.RestaurantModule
      ),
  },
  {
    path: 'pages/back-office',
    loadChildren: () =>
      import('./pages/back-office/back-office.module').then(
        (m) => m.BackOfficeModule
      ),
  },
  {
    path: 'pages/back-office/materials',
    loadChildren: () =>
      import('./pages/back-office/materials/materials.module').then(
        (m) => m.MaterialsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
