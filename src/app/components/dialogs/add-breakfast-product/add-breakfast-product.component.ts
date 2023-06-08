import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Select, initTE } from 'tw-elements';

@Component({
  selector: 'app-add-breakfast-product',
  templateUrl: './add-breakfast-product.component.html',
  styleUrls: ['./add-breakfast-product.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class AddBreakfastProductComponent implements OnInit {
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
  public categories = [
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
