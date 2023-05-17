import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BookedReservationComponent } from 'src/app/components/dialogs/booked-reservation/booked-reservation.component';
import { CheckInReservationComponent } from 'src/app/components/dialogs/check-in-reservation/check-in-reservation.component';
import { CheckOutReservationComponent } from 'src/app/components/dialogs/check-out-reservation/check-out-reservation.component';
import { LoaderModalComponent } from 'src/app/components/dialogs/loader-modal/loader-modal.component';
import { PaginationComponent } from 'src/app/components/utilities/pagination/pagination.component';
import { RouterNavsComponent } from 'src/app/components/utilities/router-navs/router-navs.component';
import { Button, Select, Input, Modal, initTE } from 'tw-elements';

@Component({
  selector: 'app-manage-rooms',
  templateUrl: './manage-rooms.component.html',
  styleUrls: ['./manage-rooms.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    RouterNavsComponent,
    LoaderModalComponent,
    BookedReservationComponent,
    CheckInReservationComponent,
    CheckOutReservationComponent,
    PaginationComponent,
  ],
})
export class ManageRoomsComponent implements OnInit, AfterViewInit {
  public page: number = 1;
  public pageLimit: number = 20;
  public showing: number = 5;
  public showings: number[] = [5, 10, 20];
  public routerLinks = {
    roomsReservation: '/main/reservations',
  };
  public availableLinks = [
    {
      name: 'Rooms',
      link: '/main/rooms',
    },
  ];
  public roomsHeaders: string[] = [
    'Room No',
    'Room Type',
    'Status',
    'Availability',
    'Check In',
    'Check Out',
  ];
  public roomTypes = [
    //list of all room types
    'Deluxe',
    'Standard',
    'Studio',
    'Double',
  ];
  public rooms = [
    {
      roomNo: 'Z-79',
      type: 'Family',
      isAvailableRoom: true,
      isCheckIn: false,
      name: 'Amaye Kalewa',
      amount: '$1428',
      checkIn: null,
      checkOut: null,
      status: 'Dirty',
    },
    {
      roomNo: 'Y-33',
      type: 'Standard Double',
      isAvailableRoom: false,
      isCheckIn: true,
      name: 'Aliko Awana',
      amount: '$800',
      checkIn: new Date(2023, 2, 2).toDateString(),
      checkOut: new Date(2023, 2, 23).toDateString(),
      status: 'Touched',
    },
    {
      roomNo: 'R-49',
      type: 'Deluxe',
      isAvailableRoom: false,
      isCheckIn: false,
      name: 'Wakali Bangi',
      amount: '$2020',
      checkIn: new Date(2023, 4, 12).toDateString(),
      checkOut: new Date(2023, 4, 15).toDateString(),
      status: 'Touched',
    },
    {
      roomNo: 'Z-79',
      type: 'Family',
      isAvailableRoom: true,
      isCheckIn: false,
      name: 'Muswahili Sana',
      amount: '$1428',
      checkIn: null,
      checkOut: null,
      status: 'Clean',
    },
    {
      roomNo: 'Y-56',
      type: 'Standard Double',
      isAvailableRoom: false,
      isCheckIn: true,
      name: 'Ni Haiya',
      amount: '$800',
      checkIn: new Date(2023, 5, 1).toDateString(),
      checkOut: new Date(2023, 5, 14).toDateString(),
      status: 'Dirty',
    },
  ];
  @ViewChild('roomsTable') roomsTable!: ElementRef;
  constructor() {}
  public ngOnInit(): void {
    initTE({ Button, Select, Input, Modal });
  }
  public ngAfterViewInit(): void {
    this.roomsTableHeaderSortListener();
  }
  public pagePlus() {
    if (this.page < this.pageLimit) this.page++;
  }
  public pageMinus() {
    if (this.page > 1) this.page--;
  }
  public valueChanged(event: any) {
    this.showing = event;
  }
  private roomsTableHeaderSortListener() {
    let table = this.roomsTable.nativeElement as HTMLTableElement;
    let th = table.querySelector('thead')?.querySelectorAll('th');
    th?.forEach((h) => {
      h.addEventListener('click', () => {
        let column: string = h.dataset['column']!;
        let order: string = h.dataset['order']!;
        if (order == 'desc') {
          h.dataset['order'] = 'asc';
          this.sortTableAsc(column);
        } else {
          h.dataset['order'] = 'desc';
          this.sortTableDesc(column);
        }
      });
    });
  }
  private sortTableDesc(column: string): void {
    switch (column) {
      case this.roomsHeaders[0]:
        this.rooms = this.rooms.sort((a, b) => (a.roomNo < b.roomNo ? 1 : -1));
        break;
      case this.roomsHeaders[1]:
        this.rooms = this.rooms.sort((a, b) => (a.type < b.type ? 1 : -1));
        break;
      case this.roomsHeaders[2]:
        this.rooms = this.rooms.sort((a, b) => (a.status < b.status ? 1 : -1));
        break;
      case this.roomsHeaders[3]:
        this.rooms = this.rooms.sort((a, b) =>
          a.isAvailableRoom < b.isAvailableRoom ? 1 : -1
        );
        break;
      case this.roomsHeaders[4]:
        this.rooms = this.rooms.sort((a, b) => {
          if (a.checkIn === null && b.checkOut === null) return 0;
          if (a.checkIn === null) return 1;
          if (b.checkIn === null) return -1;
          return a.checkIn < b.checkIn ? 1 : -1;
        });
        break;
      case this.roomsHeaders[5]:
        this.rooms = this.rooms.sort((a, b) => {
          if (a.checkOut === null && b.checkOut === null) return 0;
          if (a.checkOut === null) return 1;

          if (b.checkOut === null) return -1;
          return a.checkOut < b.checkOut ? 1 : -1;
        });
        break;
      default:
        break;
    }
  }
  private sortTableAsc(column: string): void {
    switch (column) {
      case this.roomsHeaders[0]:
        this.rooms = this.rooms.sort((a, b) => (a.roomNo > b.roomNo ? 1 : -1));
        break;
      case this.roomsHeaders[1]:
        this.rooms = this.rooms.sort((a, b) => (a.type > b.type ? 1 : -1));
        break;
      case this.roomsHeaders[2]:
        this.rooms = this.rooms.sort((a, b) => (a.status > b.status ? 1 : -1));
        break;
      case this.roomsHeaders[3]:
        this.rooms = this.rooms.sort((a, b) =>
          a.isAvailableRoom > b.isAvailableRoom ? 1 : -1
        );
        break;
      case this.roomsHeaders[4]:
        this.rooms = this.rooms.sort((a, b) => {
          if (a.checkIn === null && b.checkOut === null) return 0;
          if (a.checkIn === null) return 1;
          if (b.checkIn === null) return -1;
          return a.checkIn > b.checkIn ? 1 : -1;
        });
        break;
      case this.roomsHeaders[5]:
        this.rooms = this.rooms.sort((a, b) => {
          if (a.checkOut === null && b.checkOut === null) return 0;
          if (a.checkOut === null) return 1;

          if (b.checkOut === null) return -1;
          return a.checkOut > b.checkOut ? 1 : -1;
        });
        break;
      default:
        break;
    }
  }
}
