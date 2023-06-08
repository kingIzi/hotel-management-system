import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontalOfficeComponent } from './frontal-office.component';

const routes: Routes = [
  {
    path: 'explore',
    component: FrontalOfficeComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./exploration/exploration.component').then(
            (m) => m.ExplorationComponent
          ),
      },
      {
        path: 'reservations',
        loadComponent: () =>
          import('./reservations/reservations.component').then(
            (m) => m.ReservationsComponent
          ),
      },
      {
        path: 'rooms',
        loadComponent: () =>
          import('./manage-rooms/manage-rooms.component').then(
            (m) => m.ManageRoomsComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontalOfficeRoutingModule {}
