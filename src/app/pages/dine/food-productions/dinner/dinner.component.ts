import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddBanquetCategoryComponent } from 'src/app/components/dialogs/add-banquet-category/add-banquet-category.component';
import { AddBanquetProductComponent } from 'src/app/components/dialogs/add-banquet-product/add-banquet-product.component';
import { AddBreakfastCategoryComponent } from 'src/app/components/dialogs/add-breakfast-category/add-breakfast-category.component';
import { AddBreakfastProductComponent } from 'src/app/components/dialogs/add-breakfast-product/add-breakfast-product.component';
import { Modal, initTE } from 'tw-elements';
import * as data from 'src/assets/database.json';
import { BanquetCategory } from 'src/app/entities/banquet-category';
import { BanquetProduct } from 'src/app/entities/banquet-product';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    AddBanquetCategoryComponent,
    AddBanquetProductComponent,
    FormsModule,
  ],
})
export class DinnerComponent implements OnInit {
  public showing: number = 5;
  public showings: number[] = [5, 10, 20];
  public categoriesHeaders = ['Category Name', 'Status'];
  public mealsHeaders = [
    'Meal',
    'Product name',
    'Category',
    'Ingredients',
    'price',
    'status',
  ];
  public banquetCategories: BanquetCategory[] | undefined;
  public products: BanquetProduct[] | undefined;
  constructor() {}
  ngOnInit(): void {
    initTE({ Modal });
    let banquetData = JSON.parse(JSON.stringify(data));
    this.banquetCategories = banquetData.food.productions.banquet.categories;
    this.products = banquetData.food.productions.banquet.products;
    console.log(this.products);
  }
  public valueChanged(event: any) {
    this.showing = event;
  }
}
