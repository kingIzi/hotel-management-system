import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterNavsComponent } from 'src/app/components/utilities/router-navs/router-navs.component';
import * as data from 'src/assets/database.json';

@Component({
  selector: 'app-house-keeping',
  templateUrl: './house-keeping.component.html',
  styleUrls: ['./house-keeping.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, RouterNavsComponent, FormsModule],
})
export class HouseKeepingComponent implements OnInit {
  public availableLinks = [
    {
      name: 'Frontal office',
      link: '/main/front/explore',
    },
    {
      name: 'House Keeping',
      link: '/main/front/explore/house',
    },
  ];
  public dates: Date[] = [];
  public rooms: any[] = [];
  public dateRange: string = 'Weekly';
  public dateRanges: string[] = ['Weekly', 'Monthly'];
  private selectedCells: { row: number; column: number }[] = [];
  private selectedCleaningTimes: any[] = [];
  constructor() {}
  ngOnInit(): void {
    let store = JSON.parse(JSON.stringify(data));
    this.rooms = store.rooms.types;
    this.fillDates();
  }
  public fillDates() {
    let today = new Date();
    let daysInWeek = 7;
    let getDaysInMonth = (year: number, month: number) => {
      var date = new Date(year, month + 1, 0);
      return date.getDate();
    };
    if (this.dates.length === 0) {
      this.dates = Array.from(
        {
          length:
            this.dateRange === 'Weekly'
              ? daysInWeek
              : getDaysInMonth(today.getFullYear(), today.getMonth()),
        },
        (_, index) => {
          let date = new Date(today);
          date.setDate(date.getDate() + index);
          return date;
        }
      );
    } else if (this.dates.length > daysInWeek && this.dateRange === 'Weekly') {
      this.dates.splice(daysInWeek);
      this.selectedCleaningTimes = this.selectedCleaningTimes.filter(
        (element) => this.dates.includes(element.due)
      );
    } else if (this.dateRange === 'Monthly') {
      let lastDate = this.dates[this.dates.length - 1];
      let daysTillMonth =
        getDaysInMonth(lastDate.getFullYear(), lastDate.getMonth()) -
        daysInWeek;
      for (let i = 1; i < daysTillMonth + 1; i++) {
        let date = new Date(lastDate);
        date.setDate(date.getDate() + 1);
        this.dates.push(date);
        lastDate = this.dates[this.dates.length - 1];
      }
    }
  }
  public valueChanged(event: any) {
    this.dateRange = event;
    this.fillDates();
  }
  public onCellClick(row: number, column: number): void {
    const clickedCell = { row, column };
    const index = this.selectedCells.findIndex(
      (cell) => cell.row === row && cell.column === column
    );
    if (index !== -1) {
      // Cell already selected, so remove it
      this.selectedCells.splice(index, 1);
    } else {
      // Cell not selected, so add it
      this.selectedCells.push(clickedCell);
    }
  }
  public selectCleaningDate(
    roomTypeIndex: number,
    roomIndex: number,
    date: Date
  ) {
    let index = this.selectedCleaningTimes.findIndex((houseKeeping) => {
      return (
        houseKeeping.room === this.rooms[roomTypeIndex].rooms[roomIndex] &&
        houseKeeping.due === date
      );
    });
    if (index !== -1) {
      this.selectedCleaningTimes.splice(index, 1);
    } else {
      this.selectedCleaningTimes.push({
        room: this.rooms[roomTypeIndex].rooms[roomIndex],
        due: date,
      });
    }
  }
  public isSelectedCleaningTime(
    roomTypeIndex: number,
    roomIndex: number,
    date: Date
  ) {
    return this.selectedCleaningTimes.some(
      (cell) =>
        cell.room === this.rooms[roomTypeIndex].rooms[roomIndex] &&
        cell.due === date
    );
  }
  public roomHasSelectedCleaningDates(
    roomTypeIndex: number,
    roomIndex: number
  ) {
    let room = this.rooms[roomTypeIndex].rooms[roomIndex];
    return this.selectedCleaningTimes.some(
      (cleaningTime) => cleaningTime.room === room
    );
  }
  public isSelectedDate(date: Date) {
    return this.selectedCleaningTimes.some((item) => item.due === date);
  }
  public isSelectedCell(row: number, column: number): boolean {
    return this.selectedCells.some(
      (cell) => cell.row === row && cell.column === column
    );
  }
}
