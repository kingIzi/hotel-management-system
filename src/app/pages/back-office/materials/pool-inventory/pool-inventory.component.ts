import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from 'src/app/components/utilities/pagination/pagination.component';
import * as data from 'src/assets/database.json';

@Component({
  selector: 'app-pool-inventory',
  templateUrl: './pool-inventory.component.html',
  styleUrls: ['./pool-inventory.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, PaginationComponent],
})
export class PoolInventoryComponent implements OnInit {
  public page: number = 1;
  public pageLimit: number = 20;
  public showing: number = 5;
  public showings: number[] = [5, 10, 20];
  public poolInventory: any;
  public poolHeaders: string[] = ['Type', 'Name', 'Quantity'];
  constructor() {}
  ngOnInit(): void {
    let store = JSON.parse(JSON.stringify(data));
    this.poolInventory = store.rooms.inventories.pool;
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
