import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item-cart',
  templateUrl: './add-item-cart.component.html',
  styleUrls: ['./add-item-cart.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class AddItemCartComponent implements OnInit {
  @Input() rootId: number = 0;
  @Input() rootIdName: string = '';

  constructor() {}
  ngOnInit(): void {}
}
