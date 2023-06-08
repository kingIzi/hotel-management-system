import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-breakfast-product',
  templateUrl: './add-breakfast-product.component.html',
  styleUrls: ['./add-breakfast-product.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class AddBreakfastProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
