import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterNavsComponent } from 'src/app/components/utilities/router-navs/router-navs.component';
import * as data from 'src/assets/database.json';
import { Chart, initTE } from 'tw-elements';

@Component({
  selector: 'app-food-stock',
  templateUrl: './food-stock.component.html',
  styleUrls: ['./food-stock.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterNavsComponent, FormsModule],
})
export class FoodStockComponent implements OnInit {
  public availableLinks = [
    {
      name: 'Dinning',
      link: '/main/dine/explore',
    },
    {
      name: 'stock',
      link: '/main/dine/explore/stock',
    },
  ];
  public showing: number = 5;
  public showings: number[] = [5, 10, 20];
  public foods: any[] = [];
  constructor() {}
  ngOnInit(): void {
    initTE({ Chart });
    let store = JSON.parse(JSON.stringify(data));
    this.foods = store.food.productions.stock;
    this.viewFood = this.foods[0];
  }
  public valueChanged(event: any) {
    this.showing = event;
  }
  public viewFood: any = {};
  public viewingFood(food: any) {
    this.viewFood = food;
  }
  public nutrients: string[] = [
    'ENERC_KCAL',
    'PROCNT',
    'FAT',
    'CHOCDF',
    'FIBTG',
  ];
}
