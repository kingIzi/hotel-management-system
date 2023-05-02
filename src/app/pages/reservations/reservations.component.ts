import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Select, Modal, Datepicker, Input, initTE } from 'tw-elements';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ReservationsComponent implements OnInit {
  constructor() {}

  public reservationHeaders = [
    'Customer name',
    'Room Type',
    'Room No.',
    'Check In',
    'Check Out',
    'Total Amount',
    'Payment Status',
  ];

  ngOnInit(): void {
    initTE({ Select, Datepicker, Input, Modal });
  }
}
