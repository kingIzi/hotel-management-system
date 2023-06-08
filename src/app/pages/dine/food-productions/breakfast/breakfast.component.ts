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
import { Modal, initTE } from 'tw-elements';

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
  public categoriesHeaders = ['Category Name', 'Status'];
  public breakfastCategories = [
    {
      name: 'Cereal and Grains',
      status: true,
      icon: 'assets/img/cereals.jpg',
    },
    {
      name: 'Eggs and Dairy',
      status: true,
      icon: 'assets/img/eggs-diary.jpg',
    },
    {
      name: 'Fruits and Berries',
      status: true,
      icon: 'assets/img/fruits-salad.jpg',
    },
    {
      status: true,
      name: 'Breads and Spreads',
      icon: 'assets/img/breads-spreads.jpg',
    },
    {
      status: true,
      name: 'Juices and Smoothies',
      icon: 'assets/img/juices.jpg',
    },
    {
      status: true,
      name: 'Breakfast Meats',
      icon: 'assets/img/breakfast-meats.jpg',
    },
    {
      status: true,
      name: 'Breakfast Sides',
      icon: 'assets/img/breakfast-sides.jpg',
    },
  ];
  public mealsHeaders = [
    'Product name',
    'Category',
    'Ingredients',
    'price',
    'status',
  ];
  public meals = [
    {
      status: true,
      name: 'Scrambled eggs with toast',
      category: this.breakfastCategories[1].name,
      ingredients: 'eggs, bread',
      price: 8000,
      currency: 'TSH',
      icon: 'assets/img/scrambled-eggs.jpg',
    },
    {
      status: true,
      name: 'Oatmeal with fresh fruits and nuts',
      category: this.breakfastCategories[2].name,
      ingredients:
        'Oats, fruits (e.g., berries, bananas), nuts (e.g., almonds, walnuts)',
      price: 8000,
      currency: 'TSH',
      icon: 'assets/img/oats-meal.JPG',
    },
    {
      status: true,
      name: 'Cereal with milk and sliced bananas',
      category: this.breakfastCategories[0].name,
      ingredients: 'cereal, milk, bananas',
      price: 2000,
      currency: 'TSH',
      icon: 'assets/img/cereals-banana.jpg',
    },
    {
      status: true,
      name: 'French toast with powdered sugar and berries',
      category: this.breakfastCategories[3].name,
      ingredients: 'bread, eggs, powdered sugar, berries',
      price: 12000,
      currency: 'TSH',
      icon: 'assets/img/french-toast.jpg',
    },
  ];
  constructor() {}
  ngOnInit(): void {
    initTE({ Modal });
  }
}
