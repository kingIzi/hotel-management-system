import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Button, Select, Input, Modal, initTE } from 'tw-elements';

@Component({
  selector: 'app-staff-module',
  templateUrl: './staff-module.component.html',
  styleUrls: ['./staff-module.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class StaffModuleComponent implements OnInit {
  public staffHeaders = ['#', 'Full Name', 'Staff', 'Since', 'Salary', 'Shift'];
  public staffs = [
    {
      fullName: 'Jane Doe',
      staff: 'Receptionist',
      since: new Date(2023, 2, 17),
      salary: '200 USD',
      shift: '10:00 AM - 4:00 PM',
    },
    {
      fullName: 'John Doe',
      staff: 'Manager',
      since: new Date(2023, 4, 17),
      salary: '400 USD',
      shift: '5:00 AM - 10:00 AM',
    },
    {
      fullName: 'Kalunga Aluka',
      staff: 'Manager',
      since: new Date(2023, 3, 27),
      salary: '600 USD',
      shift: '4:00 PM - 5:00 AM',
    },
    {
      fullName: 'Jane Doe',
      staff: 'Receptionist',
      since: new Date(2023, 2, 17),
      salary: '200 USD',
      shift: '10:00 AM - 4:00 PM',
    },
    {
      fullName: 'John Doe',
      staff: 'Manager',
      since: new Date(2023, 4, 17),
      salary: '400 USD',
      shift: '5:00 AM - 10:00 AM',
    },
  ];
  public routerLinks = {
    history: `/main/staff/history`,
  };

  ngOnInit(): void {
    initTE({ Button, Select, Input, Modal });
  }

  public currentRouter(route: string) {
    return this.location.path() == route;
  }

  constructor(private location: Location) {}
}
