import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class RestaurantComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
