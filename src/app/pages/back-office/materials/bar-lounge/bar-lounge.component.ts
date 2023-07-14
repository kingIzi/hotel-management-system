import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from 'src/app/components/utilities/pagination/pagination.component';
import * as data from 'src/assets/database.json';

@Component({
  selector: 'app-bar-lounge',
  templateUrl: './bar-lounge.component.html',
  styleUrls: ['./bar-lounge.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, PaginationComponent],
})
export class BarLoungeComponent implements OnInit {
  public showing: number = 5;
  public showings: number[] = [5, 10, 20];
  public barLoungeHeaders: string[] = ['Type', 'Name', 'Quantity'];
  public barLounge: any;
  public page: number = 1;
  public pageLimit: number = 20;
  constructor() {}
  ngOnInit(): void {
    let store = JSON.parse(JSON.stringify(data));
    this.barLounge = store.rooms.inventories.barLounge;
  }
  public valueChanged(event: any) {
    this.showing = event;
  }
  public pagePlus() {
    if (this.page < this.pageLimit) this.page++;
  }
  public pageMinus() {
    if (this.page > 1) this.page--;
  }
}
