import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddBanquetCategoryComponent } from 'src/app/components/dialogs/add-banquet-category/add-banquet-category.component';
import { AddBanquetProductComponent } from 'src/app/components/dialogs/add-banquet-product/add-banquet-product.component';
import { AddBreakfastCategoryComponent } from 'src/app/components/dialogs/add-breakfast-category/add-breakfast-category.component';
import { AddBreakfastProductComponent } from 'src/app/components/dialogs/add-breakfast-product/add-breakfast-product.component';
import { Modal, initTE } from 'tw-elements';

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
    'Product name',
    'Category',
    'Ingredients',
    'price',
    'status',
  ];
  public banquetCategories = [
    {
      name: 'Soups and Stews',
      status: true,
      icon: 'assets/img/soup-stew.jpg',
    },
    {
      name: 'Sandwiches and Wraps',
      status: true,
      icon: 'assets/img/sandwiches-wraps.jpg',
    },
    {
      name: 'Pasta and Noodles',
      status: true,
      icon: 'assets/img/pasta.jpg',
    },
    {
      status: true,
      name: 'Meat and Poultry',
      icon: 'assets/img/meats.jpg',
    },
    {
      status: true,
      name: 'Vegetarian and Vegan',
      icon: 'assets/img/vegan.jpg',
    },
    {
      status: true,
      name: 'BBQ and Grilled',
      icon: 'assets/img/bbq.jpg',
    },
    {
      status: true,
      name: 'Pizza',
      icon: 'assets/img/pizza.jpg',
    },
  ];
  public meals = [
    {
      status: true,
      name: 'Grilled chicken with roasted vegetables',
      category: this.banquetCategories[5].name,
      ingredients:
        'Chicken breasts, Dried herbs (such as thyme, rosemary, or oregano),Bell peppers',
      price: 18000,
      currency: 'TSH',
      icon: 'assets/img/chicken-1.jpg',
    },
    {
      status: true,
      name: 'Spaghetti carbonara',
      category: this.banquetCategories[2].name,
      ingredients:
        'Spaghetti pasta, Pancetta or bacon, diced, Pancetta or bacon, diced, Eggs',
      price: 1400,
      currency: 'TSH',
      icon: 'assets/img/spaghetti.jpg',
    },
    {
      status: true,
      name: 'Vegetable stir-fry with tofu and noodles',
      category: this.banquetCategories[4].name,
      ingredients:
        'Firm tofu, cubed,Carrots, Bean sprouts, Garlic cloves, minced, Cabbage',
      price: 10000,
      currency: 'TSH',
      icon: 'assets/img/vegan-food.jpg',
    },
    {
      status: true,
      name: 'Chicken quesadillas with salsa and sour cream',
      category: this.banquetCategories[5].name,
      ingredients: 'Boneless, skinless chicken breasts, cooked and shredded',
      price: 12000,
      currency: 'TSH',
      icon: 'assets/img/chicken-salsa.jpg',
    },
  ];
  constructor() {}
  ngOnInit(): void {
    initTE({ Modal });
  }
  public valueChanged(event: any) {
    this.showing = event;
  }
}
