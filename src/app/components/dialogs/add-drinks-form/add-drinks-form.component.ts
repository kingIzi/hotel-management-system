import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DrinksMenu } from 'src/app/entities/drinks-menu';
import * as data from 'src/assets/database.json';

@Component({
  selector: 'app-add-drinks-form',
  templateUrl: './add-drinks-form.component.html',
  styleUrls: ['./add-drinks-form.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class AddDrinksFormComponent implements OnInit {
  @Input() drink: DrinksMenu | undefined;
  @Input() title: string | undefined;
  @Input() rootId: string | undefined = 'Add New Beverage';
  public drinksMenu: DrinksMenu[] | undefined;
  public productIcon: string | ArrayBuffer | null = null;
  public formGroup = new FormGroup({});
  constructor() {}
  ngOnInit(): void {
    let banquetData = JSON.parse(JSON.stringify(data));
    this.drinksMenu = banquetData.food.productions.drinks;
  }
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
}
