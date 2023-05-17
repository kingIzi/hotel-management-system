import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { Component, OnInit } from '@angular/core';
import {
  Select,
  Modal,
  Datepicker,
  Tab,
  Input,
  Carousel,
  initTE,
} from 'tw-elements';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
})
export class HomeComponent implements OnInit {
  constructor() {}
  public roomTypes = ['Deluxe', 'Standard', 'Studio'];
  public roomTypeCurrentIndex = 0;
  public center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12,
  };
  public zoom = 2;
  public roomTypeClicked(ind: number) {
    this.roomTypeCurrentIndex = ind;
  }
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
  };
  markerPositions: google.maps.LatLngLiteral[] = [
    {
      lat: 6.7924,
      lng: 39.2083,
    },
  ];

  ngOnInit(): void {
    initTE({ Select, Datepicker, Input, Tab, Modal, Carousel });
  }
}
