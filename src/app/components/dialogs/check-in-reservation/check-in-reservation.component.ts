import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Modal, initTE } from 'tw-elements';

@Component({
  selector: 'app-check-in-reservation',
  templateUrl: './check-in-reservation.component.html',
  styleUrls: ['./check-in-reservation.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CheckInReservationComponent implements OnInit {
  constructor() {}
  @Input() reservation: any;
  @Input() roomIndex = 1;
  ngOnInit(): void {
    initTE({ Modal });
  }
  public paymentMethods = ['Card', 'Cash'];
}
