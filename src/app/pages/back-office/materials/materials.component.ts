import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterNavsComponent } from 'src/app/components/utilities/router-navs/router-navs.component';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, RouterNavsComponent],
})
export class MaterialsComponent implements OnInit {
  public availableLinks = [
    {
      name: 'Back Office',
      link: '/main/back/explore',
    },
    {
      name: 'Materials',
      link: '/main/back/explore/materials/rooms',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
