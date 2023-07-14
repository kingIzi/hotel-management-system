import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterNavsComponent } from 'src/app/components/utilities/router-navs/router-navs.component';
import { Button, Select, Input, Modal, initTE } from 'tw-elements';
import * as data from 'src/assets/database.json';
import { RoomIssue } from 'src/app/entities/room-issue';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from 'src/app/components/utilities/pagination/pagination.component';

@Component({
  selector: 'app-complaint-management',
  templateUrl: './complaint-management.component.html',
  styleUrls: ['./complaint-management.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterNavsComponent,
    FormsModule,
    ReactiveFormsModule,
    PaginationComponent,
  ],
})
export class ComplaintManagementComponent implements OnInit {
  constructor() {}
  public availableLinks = [
    {
      name: 'Back Office',
      link: '/main/back/explore',
    },
    {
      name: 'Complaint Management',
      link: '/main/back/explore/maintenance',
    },
  ];
  public roomIssues: RoomIssue[] = [];
  public roomIssueTypes: any;
  public roomIssue: string = 'Select general issue';
  public roomType: string = 'Select room type';
  public issueRoomNumbers: number[] | undefined = [];
  public issueLocations: string[] | undefined = [];
  public showing: number = 5;
  public showings: number[] = [5, 10, 20];
  public page: number = 1;
  public pageLimit: number = 20;
  ngOnInit(): void {
    initTE({ Button, Select, Input, Modal });
    let store = JSON.parse(JSON.stringify(data));
    this.roomIssueTypes = store.rooms.issues.issues;
    this.issueLocations = store.rooms.issues.locations;
    for (let roomType of store.rooms.roomTypes) {
      let roomIssue = {
        roomType: roomType.type,
        rooms: roomType.rooms,
        description: '',
      } as RoomIssue;
      this.roomIssues.push(roomIssue);
    }
  }
  public issuePlace: string = '';
  public onIssuePlaceChanged(event: any) {
    this.issuePlace = event.target.value;
  }
  public onRoomIssueTypeChanged(value: any) {
    let issue = this.roomIssues.find((elem) => elem.roomType?.includes(value));
    if (!this.roomType) throw new Error('Failed to find room type');
    this.issueRoomNumbers = issue?.rooms;
  }
  public valueChanged(event: any) {
    this.showing = event;
  }
  public pagePlus() {
    if (this.page < this.pageLimit) this.page++;
  }
  public pageMinus() {
    if (this.page > 1) this.page--;
  }
  public headers = [
    'Admin',
    'Complaint type',
    'Complaint',
    'Date Created',
    'Resolved',
    'Budget',
  ];
  public complaints = [
    {
      admin: 'Admin',
      complaint: 'A56 Bathroom sewer smell',
      type: 'Bad ordors',
      created: new Date(2023, 4, 22),
      resolved: null,
      budget: null,
    },
    {
      admin: 'Admin',
      complaint: 'D-56 Room lock broken',
      type: 'Broken doors',
      created: new Date(2023, 2, 22),
      resolved: new Date(2023, 2, 24),
      budget: 18,
    },
    {
      admin: 'Admin',
      complaint: 'A56 Bathroom sewer smell',
      type: 'Bad ordors',
      created: new Date(2023, 4, 22),
      resolved: null,
      budget: null,
    },
    {
      admin: 'Admin',
      complaint: 'D-56 Room lock broken',
      type: 'Broken doors',
      created: new Date(2023, 2, 22),
      resolved: new Date(2023, 2, 24),
      budget: 18,
    },
  ];
  public openDialog(index: number) {
    let dialogId = 'my_modal_' + index;
    let dialog = document.getElementById(dialogId) as HTMLDialogElement;
    if (dialog) {
      dialog.showModal();
    }
  }
}
