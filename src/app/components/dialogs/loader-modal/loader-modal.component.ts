import { Component, OnInit } from '@angular/core';
import { Modal, initTE } from 'tw-elements';

@Component({
  selector: 'app-loader-modal',
  templateUrl: './loader-modal.component.html',
  styleUrls: ['./loader-modal.component.scss'],
  standalone: true,
})
export class LoaderModalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    initTE({ Modal });
  }
}
