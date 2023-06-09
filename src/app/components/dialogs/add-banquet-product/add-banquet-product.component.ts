import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Select, initTE } from 'tw-elements';

@Component({
  selector: 'app-add-banquet-product',
  templateUrl: './add-banquet-product.component.html',
  styleUrls: ['./add-banquet-product.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class AddBanquetProductComponent implements OnInit {
  @Input() title: string = 'Add Product';
  public addProductFormGroup: FormGroup = new FormGroup({
    productName: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
  });
  get productName() {
    return this.addProductFormGroup.get('productName');
  }
  get price() {
    return this.addProductFormGroup.get('price');
  }
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
  public productIcon: string | ArrayBuffer | null = null;
  constructor() {}
  public onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.productIcon = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  ngOnInit(): void {
    initTE({ Select });
  }
}
