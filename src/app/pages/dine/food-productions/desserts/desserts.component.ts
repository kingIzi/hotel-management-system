import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AddDessertsFormComponent } from 'src/app/components/dialogs/add-desserts-form/add-desserts-form.component';
import { DessertsMenu } from 'src/app/entities/desserts-menu';
import * as data from 'src/assets/database.json';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.scss'],
  standalone: true,
  imports: [CommonModule, AddDessertsFormComponent],
})
export class DessertsComponent implements OnInit {
  public dessertsMenu: DessertsMenu[] | undefined;
  constructor() {}
  ngOnInit(): void {
    let banquetData = JSON.parse(JSON.stringify(data));
    this.dessertsMenu = banquetData.food.productions.desserts;
  }
}
