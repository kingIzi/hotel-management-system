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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackOfficeRoutingModule {}
