import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class DinnerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
