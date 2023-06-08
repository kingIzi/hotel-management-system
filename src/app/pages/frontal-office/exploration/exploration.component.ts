import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterNavsComponent } from 'src/app/components/utilities/router-navs/router-navs.component';

@Component({
  selector: 'app-exploration',
  templateUrl: './exploration.component.html',
  styleUrls: ['./exploration.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule, RouterNavsComponent],
})
export class ExplorationComponent implements OnInit {
  constructor() {}
  public availableLinks = [
    {
      name: 'Frontal office',
      link: '/main/front/explore',
    },
  ];
  ngOnInit(): void {}
}
