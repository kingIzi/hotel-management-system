import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Button, Select, Input, Modal, initTE } from 'tw-elements';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class HistoryComponent implements OnInit {
  public routerLinks = {};
  private queryParam: any;
  constructor(private activatedRouter: ActivatedRoute) {
    this.queryParam = this.activatedRouter.snapshot.paramMap
      .get('staff')
      ?.toString();
  }

  fullName() {
    return this.queryParam.substring(0, this.findFirstDigit(this.queryParam));
  }

  salary() {
    return this.queryParam.substring(this.findFirstDigit(this.queryParam));
  }

  public listHeaders = ['#', 'Shift', 'Since', 'Till'];
  public list = [
    {
      shift: 'Morning 4:00 AM - 10:00 AM',
      since: new Date(2019, 1, 21),
      till: null,
    },
    {
      shift: 'Morning 4:00 AM - 10:00 AM',
      since: new Date(2015, 1, 21),
      till: new Date(2023, 1, 18),
    },
  ];

  private findFirstDigit(str: string): number {
    const digitRegex = /\d/; // Matches any digit character
    const match = str.search(digitRegex);
    return match;
  }

  ngOnInit(): void {
    initTE({ Button, Select, Input, Modal });
  }
}
