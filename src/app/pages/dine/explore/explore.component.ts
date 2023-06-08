import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterNavsComponent } from 'src/app/components/utilities/router-navs/router-navs.component';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  standalone: true,
  imports: [RouterModule, RouterNavsComponent],
})
export class ExploreComponent implements OnInit {
  public availableLinks = [
    {
      name: 'Dinning',
      link: '/main/dine/explore',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
