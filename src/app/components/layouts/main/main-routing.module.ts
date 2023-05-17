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
        path: 'reservations',
        loadComponent: () =>
          import('../../../pages/reservations/reservations.component').then(
            (m) => m.ReservationsComponent
          ),
      },
      {
        path: 'rooms',
        loadComponent: () =>
          import('../../../pages/manage-rooms/manage-rooms.component').then(
            (m) => m.ManageRoomsComponent
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
        path: 'complaints',
        loadComponent: () =>
          import(
            '../../../pages/complaint-management/complaint-management.component'
          ).then((m) => m.ComplaintManagementComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
