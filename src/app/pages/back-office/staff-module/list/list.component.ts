import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from 'src/app/components/utilities/pagination/pagination.component';
import { RouterNavsComponent } from 'src/app/components/utilities/router-navs/router-navs.component';
import * as data from 'src/assets/database.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterNavsComponent,
    RouterModule,
    FormsModule,
    PaginationComponent,
  ],
})
export class ListComponent implements OnInit {
  public availableLinks = [
    {
      name: 'Back Office',
      link: '/main/back/explore',
    },
    {
      name: 'Staff Management',
      link: '/main/back/explore/staff/list',
    },
  ];
  public staffHeaders = ['#', 'Full Name', 'Staff', 'Since', 'Salary', 'Shift'];
  public staffs: any;
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
  constructor() {}
  ngOnInit(): void {
    let store = JSON.parse(JSON.stringify(data));
    this.staffs = store.users.staffs;
  }
  public openDialog(index: number) {
    let dialogId = 'my_modal_' + index;
    let dialog = document.getElementById(dialogId) as HTMLDialogElement;
    if (dialog) {
      dialog.showModal();
    }
  }
}
