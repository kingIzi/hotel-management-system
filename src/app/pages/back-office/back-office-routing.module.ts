import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office.component';

const routes: Routes = [
  {
    path: 'explore',
    component: BackOfficeComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./explore/explore.component').then((m) => m.ExploreComponent),
      },
      {
        path: 'maintenance',
        loadComponent: () =>
          import('./complaint-management/complaint-management.component').then(
            (m) => m.ComplaintManagementComponent
          ),
      },
      {
        path: 'materials',
        loadChildren: () =>
          import('./materials/materials.module').then((m) => m.MaterialsModule),
      },
      {
        path: 'staff',
        loadChildren: () =>
          import('./staff-module/staff-module.module').then(
            (m) => m.StaffModuleModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackOfficeRoutingModule {}
