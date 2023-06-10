import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterNavsComponent } from 'src/app/components/utilities/router-navs/router-navs.component';
import { DrinksMenu } from 'src/app/entities/drinks-menu';
import { Tab, initTE } from 'tw-elements';
import * as data from 'src/assets/database.json';
import { DessertsMenu } from 'src/app/entities/desserts-menu';
import { BreakfastProduct } from 'src/app/entities/breakfast-product';
import { BanquetProduct } from 'src/app/entities/banquet-product';
import { AddItemCartComponent } from 'src/app/components/dialogs/add-item-cart/add-item-cart.component';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterNavsComponent,
    RouterModule,
    AddItemCartComponent,
  ],
})
export class CommandComponent implements OnInit {
  public availableLinks = [
    {
      name: 'Dinning',
      link: '/main/dine/explore',
    },
    {
      name: 'Restaurant',
      link: '/main/dine/explore/restaurant',
    },
  ];
  public inCart: Array<any> = [];
  public drinksMenu: DrinksMenu[] | undefined;
  public dessertsMenu: DessertsMenu[] | undefined;
  public breakfastProducts: BreakfastProduct[] | undefined;
  public banquetProducts: BanquetProduct[] | undefined;
  //public allMenus!: Array<any> | undefined;
  public allMenus: (
    | BreakfastProduct
    | BanquetProduct
    | DrinksMenu
    | DessertsMenu
  )[] = [];

  constructor() {}

  ngOnInit(): void {
    initTE({ Tab });
    let store = JSON.parse(JSON.stringify(data));
    this.drinksMenu = store.food.productions.drinks;
    this.dessertsMenu = store.food.productions.desserts;
    this.breakfastProducts = store.food.productions.breakfast.products;
    this.banquetProducts = store.food.productions.banquet.products;
    this.breakfastProducts?.forEach((item) => {
      this.allMenus.push(item);
    });
    this.banquetProducts?.forEach((item) => {
      this.allMenus.push(item);
    });
    this.drinksMenu?.forEach((item) => {
      item.products?.forEach((elem) => {
        elem.category = item.category;
        this.allMenus.push(elem);
      });
    });
    this.dessertsMenu?.forEach((item) => {
      item.products?.forEach((elem) => {
        elem.category = item.category;
        this.allMenus.push(elem);
      });
    });
  }
  public getDrinksProducts(): Array<any> {
    let list: any[] = [];
    this.drinksMenu?.forEach((item) => {
      item.products?.forEach((elem) => {
        elem.category = item.category;
        list.push(elem);
      });
    });
    return list;
  }
  public getDessertsProducts(): Array<any> {
    let list: any[] = [];
    this.dessertsMenu?.forEach((item) => {
      item.products?.forEach((elem) => {
        elem.category = item.category;
        list.push(elem);
      });
    });
    return list;
  }
  public addToCart(
    item:
      | BreakfastProduct
      | BanquetProduct
      | DrinksMenu
      | DessertsMenu
      | undefined
  ) {
    if (!this.inCart.includes(item)) this.inCart?.push(item);
  }
}
