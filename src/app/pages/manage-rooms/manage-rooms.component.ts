import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Button, initTE } from 'tw-elements';

@Component({
  selector: 'app-manage-rooms',
  templateUrl: './manage-rooms.component.html',
  styleUrls: ['./manage-rooms.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ManageRoomsComponent implements OnInit {
  constructor() {}
  public showing: number = 10;
  public showings: number[] = [5, 10, 20];

  ngOnInit(): void {
    initTE({ Button });
  }
}
