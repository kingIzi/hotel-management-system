import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class PaginationComponent implements OnInit {
  @Input() page!: number;
  @Input() limit!: number;

  @Output() setPagePlus = new EventEmitter<number>(); //

  @Output() setPageMinus = new EventEmitter<number>();

  constructor() {}
  public currentPagination() {
    return Array.from({ length: this.page }, (_, index) => index + 1);
  }

  public next() {
    this.setPagePlus.emit();
  }
  public prev() {
    this.setPageMinus.emit();
  }
  public ngOnInit(): void {}
}
