import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterNavsComponent } from 'src/app/components/utilities/router-navs/router-navs.component';
import { Button, Select, Input, Modal, initTE } from 'tw-elements';

@Component({
  selector: 'app-staff-add',
  templateUrl: './staff-add.component.html',
  styleUrls: ['./staff-add.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterNavsComponent, RouterModule],
})
export class StaffAddComponent implements OnInit {
  public availableLinks = [
    {
      name: 'Back Office',
      link: '/main/back/explore',
    },
    {
      name: 'Staff Management',
      link: '/main/back/explore/staff/list',
    },
    {
      name: 'Add New Staff',
      link: '/main/back/explore/staff/history',
    },
  ];
  constructor() {}
  ngOnInit(): void {
    initTE({ Button, Select, Input, Modal });
  }
}
