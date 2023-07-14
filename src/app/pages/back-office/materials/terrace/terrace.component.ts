import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from 'src/app/components/utilities/pagination/pagination.component';
import * as data from 'src/assets/database.json';

@Component({
  selector: 'app-terrace',
  templateUrl: './terrace.component.html',
  styleUrls: ['./terrace.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, PaginationComponent],
})
export class TerraceComponent implements OnInit {
  public showing: number = 5;
  public showings: number[] = [5, 10, 20];
  public terraceHeaders: string[] = ['Type', 'Name', 'Quantity'];
  public terraceData: any;
  public page: number = 1;
  public pageLimit: number = 20;
  constructor() {}
  ngOnInit(): void {
    let store = JSON.parse(JSON.stringify(data));
    this.terraceData = store.rooms.inventories.terrace;
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
