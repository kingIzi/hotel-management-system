import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AddBreakfastCategoryComponent } from 'src/app/components/dialogs/add-breakfast-category/add-breakfast-category.component';
import { AddBreakfastProductComponent } from 'src/app/components/dialogs/add-breakfast-product/add-breakfast-product.component';
import { LoaderModalComponent } from 'src/app/components/dialogs/loader-modal/loader-modal.component';
import { BreakfastCategory } from 'src/app/entities/breakfast-category';
import { BreakfastProduct } from 'src/app/entities/breakfast-product';
import { Modal, initTE } from 'tw-elements';
import * as data from 'src/assets/database.json';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderModalComponent,
    AddBreakfastCategoryComponent,
    AddBreakfastProductComponent,
  ],
})
export class BreakfastComponent implements OnInit {
  public availableLinks = [
    {
      name: 'Dinning',
      link: '/main/dine/explore',
    },
    {
      name: 'Food Production',
      link: '/main/dine/explore/production',
    },
  ];
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
  public breakfastCategories: BreakfastCategory[] | undefined;
  public products: BreakfastProduct[] | undefined;
  constructor() {}
  ngOnInit(): void {
    initTE({ Modal });
    let breakfastData = JSON.parse(JSON.stringify(data));
    this.breakfastCategories =
      breakfastData.food.productions.breakfast.categories;
    this.products = breakfastData.food.productions.breakfast.products;
  }
  public valueChanged(event: any) {
    this.showing = event;
  }
}
