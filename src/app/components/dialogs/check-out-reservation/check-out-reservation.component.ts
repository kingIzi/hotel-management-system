import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Modal, initTE } from 'tw-elements';

@Component({
  selector: 'app-check-out-reservation',
  templateUrl: './check-out-reservation.component.html',
  styleUrls: ['./check-out-reservation.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CheckOutReservationComponent implements OnInit {
  @Input() reservation: any;
  @Input() roomIndex!: number;
  constructor() {}

  ngOnInit(): void {
    initTE({ Modal });
  }

  public paymentMethods = ['Card', 'Cash'];
}
