import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.scss'],
  standalone: true,
  imports: [RouterModule],
})
export class BackOfficeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
