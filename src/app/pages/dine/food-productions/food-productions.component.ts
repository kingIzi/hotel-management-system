import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterNavsComponent } from 'src/app/components/utilities/router-navs/router-navs.component';
import { Tab, initTE } from 'tw-elements';

@Component({
  selector: 'app-food-productions',
  templateUrl: './food-productions.component.html',
  styleUrls: ['./food-productions.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, RouterNavsComponent],
})
export class FoodProductionsComponent implements OnInit {
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
  constructor() {}
  ngOnInit(): void {
    initTE({ Tab });
  }
}
