import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterNavsComponent } from 'src/app/components/utilities/router-navs/router-navs.component';
import { Button, Select, Input, Modal, initTE } from 'tw-elements';
import * as data from 'src/assets/database.json';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from 'src/app/components/utilities/pagination/pagination.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterNavsComponent,
    FormsModule,
    PaginationComponent,
  ],
})
export class HistoryComponent implements OnInit {
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
      name: 'Employee History',
      link: '/main/back/explore/staff/history',
    },
  ];
  public routerLinks = {};
  private queryParam: any;
  public staff: any;
  constructor(private activatedRouter: ActivatedRoute) {
    this.queryParam = this.activatedRouter.snapshot.paramMap.get('staff');
    this.availableLinks[
      this.availableLinks.length - 1
    ].link += `/${this.queryParam}`;
  }
  public showing: number = 5;
  public showings: number[] = [5, 10, 20];
  public page: number = 1;
  public pageLimit: number = 20;
  public valueChanged(event: any) {
    this.showing = event;
  }
  public pagePlus() {
    if (this.page < this.pageLimit) this.page++;
  }
  public pageMinus() {
    if (this.page > 1) this.page--;
  }
  public listHeaders = ['#', 'Shift', 'Since', 'Till'];
  public list = [
    {
      shift: 'Morning 4:00 AM - 10:00 AM',
      since: new Date(2019, 1, 21),
      till: null,
    },
    {
      shift: 'Morning 4:00 AM - 10:00 AM',
      since: new Date(2015, 1, 21),
      till: new Date(2023, 1, 18),
    },
  ];

  private findFirstDigit(str: string): number {
    const digitRegex = /\d/; // Matches any digit character
    const match = str.search(digitRegex);
    return match;
  }

  ngOnInit(): void {
    initTE({ Button, Select, Input, Modal });
    let store = JSON.parse(JSON.stringify(data));
    this.staff = store.users.staffs[this.queryParam];
  }
}
