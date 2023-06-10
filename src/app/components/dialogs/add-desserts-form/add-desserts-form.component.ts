import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DessertsMenu } from 'src/app/entities/desserts-menu';
import * as data from 'src/assets/database.json';
import { Select, initTE } from 'tw-elements';

@Component({
  selector: 'app-add-desserts-form',
  templateUrl: './add-desserts-form.component.html',
  styleUrls: ['./add-desserts-form.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class AddDessertsFormComponent implements OnInit {
  @Input() dessert: DessertsMenu | undefined;
  @Input() title: string | undefined;
  public formGroup = new FormGroup({});
  public productIcon: string | ArrayBuffer | null = null;
  public dessertsMenu: DessertsMenu[] | undefined;
  constructor() {}
  ngOnInit(): void {
    initTE({ Select });
    let banquetData = JSON.parse(JSON.stringify(data));
    this.dessertsMenu = banquetData.food.productions.drinks;
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
