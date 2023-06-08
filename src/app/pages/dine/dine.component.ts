import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dine',
  templateUrl: './dine.component.html',
  styleUrls: ['./dine.component.scss'],
  standalone: true,
  imports: [RouterModule],
})
export class DineComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
