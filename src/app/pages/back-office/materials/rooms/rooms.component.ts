import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as data from 'src/assets/database.json';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class RoomsComponent implements OnInit, AfterViewInit {
  @ViewChild('tabs') tabs!: ElementRef;
  public inventoryHeaders: string[] = ['Category', 'type', 'Name', 'Quantity'];
  public inventoryList: any;
  public currentInventory: any = {};
  public showing: number = 5;
  public showings: number[] = [5, 10, 20];
  constructor() {}
  ngAfterViewInit(): void {
    let ulist = this.tabs.nativeElement as HTMLUListElement;
    ulist.children[0].classList.add('tab-active');
  }
  ngOnInit(): void {
    let store = JSON.parse(JSON.stringify(data));
    this.inventoryList = store.rooms.inventories.rooms;
    this.currentInventory = this.inventoryList[0];
  }
  public changeCurrentInventory(currentInventory: any) {
    this.currentInventory = currentInventory;
  }
  public calculateInventoryCategoryTotal(inventory: any) {
    let total = 0;
    inventory.items.forEach((elem: any) => {
      elem.variants.forEach((item: any) => {
        total += item.quantity;
      });
    });
    return total;
  }
  public valueChanged(event: any) {
    this.showing = event;
  }
  public categoryUlClicked(tab: HTMLAnchorElement) {
    let ulist = this.tabs.nativeElement as HTMLUListElement;
    for (let i = 0; i < ulist.children.length; i++) {
      if (ulist.children[i].classList.contains('tab-active')) {
        ulist.children[i].classList.remove('tab-active');
      }
    }
    tab.classList.add('tab-active');
    let clickedInventory = this.inventoryList.find(
      (elem: any) => elem.category === tab.innerText
    );
    this.changeCurrentInventory(clickedInventory);
  }
}
