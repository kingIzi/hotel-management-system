import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('../../../pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'staff',
        loadChildren: () =>
          import('../../../pages/staff-module/staff-module.module').then(
            (m) => m.StaffModuleModule
          ),
      },
      {
        path: 'front',
        loadChildren: () =>
          import('../../../pages/frontal-office/frontal-office.module').then(
            (m) => m.FrontalOfficeModule
          ),
      },
      {
        path: 'dine',
        loadChildren: () =>
          import('../../../pages/dine/dine.module').then((m) => m.DineModule),
      },
      {
        path: 'back',
        loadChildren: () =>
          import('../../../pages/back-office/back-office.module').then(
            (m) => m.BackOfficeModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
