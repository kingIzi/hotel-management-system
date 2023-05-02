import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { NavbarItem } from 'src/app/helpers/navbar-item';
import { Sidenav, Button, initTE } from 'tw-elements';

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
      routerLink: '/main/reservations',
      title: 'Reservations',
      bootstrapIcon: 'bi bi-calendar-check',
    } as NavbarItem,
    {
      routerLink: '/main/rooms',
      title: 'Manage Rooms',
      bootstrapIcon: 'bi bi-hospital-fill',
    } as NavbarItem,
    {
      routerLink: '/main/staff',
      title: 'Staff Section',
      bootstrapIcon: 'bi bi-people-fill',
    } as NavbarItem,
    {
      routerLink: '/main/complaints',
      title: 'Manage Complaints',
      bootstrapIcon: 'bi bi-chat-fill',
    } as NavbarItem,
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    initTE({ Sidenav, Button });
  }
}
