import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select, initTE } from 'tw-elements';
import * as data from 'src/assets/database.json';
import { DrinksMenu } from 'src/app/entities/drinks-menu';
import { AddDrinksFormComponent } from 'src/app/components/dialogs/add-drinks-form/add-drinks-form.component';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, AddDrinksFormComponent],
})
export class DrinksComponent implements OnInit {
  public showing: number = 5;
  public showings: number[] = [5, 10, 20];
  public drinksMenu: DrinksMenu[] | undefined;
  constructor() {}

  ngOnInit(): void {
    initTE({ Select });
    let banquetData = JSON.parse(JSON.stringify(data));
    this.drinksMenu = banquetData.food.productions.drinks;
  }
  public valueChanged(event: any) {
    this.showing = event;
  }
}
