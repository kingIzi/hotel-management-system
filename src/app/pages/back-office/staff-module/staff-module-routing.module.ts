import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffModuleComponent } from './staff-module.component';

const routes: Routes = [
  {
    path: '',
    component: StaffModuleComponent,
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('./list/list.component').then((m) => m.ListComponent),
      },
      {
        path: 'add',
        loadComponent: () =>
          import('./staff-add/staff-add.component').then(
            (m) => m.StaffAddComponent
          ),
      },
      {
        path: 'history/:staff',
        loadComponent: () =>
          import('./history/history.component').then((m) => m.HistoryComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffModuleRoutingModule {}
