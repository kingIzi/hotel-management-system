import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterNavsComponent } from 'src/app/components/utilities/router-navs/router-navs.component';
import { Button, Select, Input, Modal, initTE } from 'tw-elements';

@Component({
  selector: 'app-staff-module',
  templateUrl: './staff-module.component.html',
  styleUrls: ['./staff-module.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, RouterNavsComponent],
})
export class StaffModuleComponent implements OnInit {
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
