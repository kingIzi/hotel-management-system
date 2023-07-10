import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavbarItem } from 'src/app/helpers/navbar-item';
import { Sidenav, Button, Collapse, initTE } from 'tw-elements';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class SidebarComponent implements OnInit {
  public navbarItems: NavbarItem[] = [
    {
      routerLink: '/main/dashboard',
      title: 'Dashboard',
      bootstrapIcon: 'bi bi-bar-chart-line-fill',
    } as NavbarItem,
    {
      routerLink: '/main/front/explore',
      title: 'Front Office',
      bootstrapIcon: 'bi bi-building',
    } as NavbarItem,
    {
      routerLink: '/main/back/explore',
      title: 'Back Office',
      bootstrapIcon: 'bi bi-folder',
    } as NavbarItem,
    {
      routerLink: '/main/dine/explore',
      title: 'Dinning',
      bootstrapIcon: 'bi bi-egg-fried',
    } as NavbarItem,
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    initTE({ Sidenav, Button, Collapse });
  }
}
