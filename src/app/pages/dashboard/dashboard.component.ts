import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Resume } from 'src/app/helpers/resume';
import { ChartType, GoogleChartsModule } from 'angular-google-charts';
import { RouterModule } from '@angular/router';
import { RouterNavsComponent } from 'src/app/components/utilities/router-navs/router-navs.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    GoogleChartsModule,
    RouterModule,
    RouterNavsComponent,
  ],
})
export class DashboardComponent implements OnInit {
  constructor() {}
  public resumes: Resume[] = [
    {
      total: 24,
      title: 'Total rooms',
      bootstrapIcon: 'bi bi-hospital-fill',
      color: '#393646',
    } as Resume,
    {
      total: 8,
      title: 'Reservations',
      bootstrapIcon: 'bi bi-calendar-check',
      color: '#6D5D6E',
    } as Resume,
    {
      total: 31,
      title: 'Staff',
      bootstrapIcon: 'bi bi-people-fill',
      color: '#6D5D6E',
    } as Resume,
    {
      total: 2,
      title: 'Complaints',
      bootstrapIcon: 'bi bi-bar-chart-fill',
      color: '#25356B',
    } as Resume,
    {
      total: 17,
      title: 'Booked rooms',
      bootstrapIcon: 'bi bi-grid-fill',
      color: '#FF0000',
    } as Resume,
    {
      total: 9,
      title: 'Available rooms',
      bootstrapIcon: 'bi bi-check-circle-fill',
      color: '#4C8023',
    } as Resume,
  ];
  title = 'Population (in millions)';
  type = ChartType.BarChart;
  data = [
    ['2012', 900],
    ['2013', 1000],
    ['2014', 1170],
    ['2015', 1250],
    ['2016', 1530],
  ];
  public availableLinks = [
    {
      name: 'Dashboard',
      link: '/main/dashboard',
    },
  ];
  numbersSequence() {
    return Array.from(Array(100), (_, index) => index + 1);
  }
  ngOnInit(): void {}
}
