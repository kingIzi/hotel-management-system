import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Button, Select, Input, Modal, initTE } from 'tw-elements';

@Component({
  selector: 'app-staff-add',
  templateUrl: './staff-add.component.html',
  styleUrls: ['./staff-add.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class StaffAddComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    initTE({ Button, Select, Input, Modal });
  }
}
