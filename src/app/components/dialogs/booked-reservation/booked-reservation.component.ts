import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Modal, initTE } from 'tw-elements';

@Component({
  selector: 'app-booked-reservation',
  templateUrl: './booked-reservation.component.html',
  styleUrls: ['./booked-reservation.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class BookedReservationComponent implements OnInit {
  constructor() {}
  @Input() reservation: any;
  @Input() roomIndex = 1;
  ngOnInit(): void {
    initTE({ Modal });
  }
}
