import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterNavsComponent } from 'src/app/components/utilities/router-navs/router-navs.component';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, RouterNavsComponent],
})
export class ExploreComponent implements OnInit {
  constructor() {}
  public availableLinks = [
    {
      name: 'Back Office',
      link: '/main/back/explore',
    },
  ];
  ngOnInit(): void {}
}
