import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialsComponent } from './materials.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialsComponent,
    children: [
      {
        path: 'rooms',
        loadComponent: () =>
          import('./rooms/rooms.component').then((m) => m.RoomsComponent),
      },
      {
        path: 'terrace',
        loadComponent: () =>
          import('./terrace/terrace.component').then((m) => m.TerraceComponent),
      },
      {
        path: 'pool',
        loadComponent: () =>
          import('./pool-inventory/pool-inventory.component').then(
            (m) => m.PoolInventoryComponent
          ),
      },
      {
        path: 'bar',
        loadComponent: () =>
          import('./bar-lounge/bar-lounge.component').then(
            (m) => m.BarLoungeComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialsRoutingModule {}
