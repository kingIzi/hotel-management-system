import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-router-navs',
  templateUrl: './router-navs.component.html',
  styleUrls: ['./router-navs.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class RouterNavsComponent implements OnInit {
  constructor() {}
  //navLinks!:{name: string,link:string}[] = []
  @Input() navLinks: { name: string; link: string }[] = [];
  ngOnInit(): void {}
}
