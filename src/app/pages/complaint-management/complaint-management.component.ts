import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Button, Select, Input, Modal, initTE } from 'tw-elements';

@Component({
  selector: 'app-complaint-management',
  templateUrl: './complaint-management.component.html',
  styleUrls: ['./complaint-management.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ComplaintManagementComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    initTE({ Button, Select, Input, Modal });
  }

  public headers = [
    '#',
    'Admin',
    'Complaint type',
    'Complaint',
    'Date Created',
    'Resolved',
    'Budget',
  ];

  public list = [
    {
      admin: 'Admin',
      complaint: 'A56 Bathroom sewer smell',
      type: 'Bad ordors',
      created: new Date(2023, 4, 22),
      resolved: null,
      budget: null,
    },
    {
      admin: 'Admin',
      complaint: 'D-56 Room lock broken',
      type: 'Broken doors',
      created: new Date(2023, 2, 22),
      resolved: new Date(2023, 2, 24),
      budget: 18,
    },
    {
      admin: 'Admin',
      complaint: 'A56 Bathroom sewer smell',
      type: 'Bad ordors',
      created: new Date(2023, 4, 22),
      resolved: null,
      budget: null,
    },
    {
      admin: 'Admin',
      complaint: 'D-56 Room lock broken',
      type: 'Broken doors',
      created: new Date(2023, 2, 22),
      resolved: new Date(2023, 2, 24),
      budget: 18,
    },
  ];
}
