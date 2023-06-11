import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterNavsComponent } from 'src/app/components/utilities/router-navs/router-navs.component';
import { DrinksMenu } from 'src/app/entities/drinks-menu';
import { Tab, initTE } from 'tw-elements';
import * as data from 'src/assets/database.json';
import { DessertsMenu } from 'src/app/entities/desserts-menu';
import { BreakfastProduct } from 'src/app/entities/breakfast-product';
import { BanquetProduct } from 'src/app/entities/banquet-product';
import { AddItemCartComponent } from 'src/app/components/dialogs/add-item-cart/add-item-cart.component';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

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
    FormsModule,
    ReactiveFormsModule,
  ],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', animate(300)),
    ]),
  ],
})
export class CommandComponent implements OnInit, AfterViewInit {
  @ViewChild('cartBtn') cartBtn!: ElementRef;
  public formGroupArray: FormGroup[] = [];
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
  public menuTableHeaders: string[] = ['Product', 'Quantity', 'Price'];
  //public allMenus!: Array<any> | undefined;
  public allMenus: (
    | BreakfastProduct
    | BanquetProduct
    | DrinksMenu
    | DessertsMenu
  )[] = [];

  constructor() {}
  ngAfterViewInit(): void {}
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
    if (!this.inCart.includes(item)) {
      this.inCart?.push(item);
      let group = new FormGroup({
        product: new FormControl(item?.name, []),
        quantity: new FormControl(1, []),
        price: new FormControl(item?.price, []),
      });
      this.formGroupArray.push(group);
    }
  }
  public removeCartFormItem(group: FormGroup) {
    const cartIndex = this.inCart.findIndex(
      (obj) => obj.name === group.get('product')?.value
    );
    let index = this.formGroupArray.indexOf(group);
    this.formGroupArray.splice(index, 1);
    this.inCart.splice(cartIndex, 1);
  }
  public isAddedToCartItem(
    item:
      | BreakfastProduct
      | BanquetProduct
      | DrinksMenu
      | DessertsMenu
      | undefined
  ) {
    return this.inCart.includes(item);
  }
  public cartItemChanged(event: any, index: number) {
    this.formGroupArray[index].get('quantity')?.setValue(event.target.value);
  }
  public increamentCartItemQuantity(index: number) {
    let quantity = this.formGroupArray[index].get('quantity');
    if (quantity?.value < 10) {
      quantity?.setValue(quantity?.value + 1);
    }
  }
  public decrementCartItemQuantity(index: number) {
    let quantity = this.formGroupArray[index].get('quantity');
    if (quantity?.value !== 1) {
      quantity?.setValue(quantity?.value - 1);
    }
  }
  public array100numbers() {
    return Array.from({ length: 13 }, (_, index) => index + 2);
  }
}
