import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInReservationComponent } from './check-in-reservation.component';

describe('CheckInReservationComponent', () => {
  let component: CheckInReservationComponent;
  let fixture: ComponentFixture<CheckInReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckInReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckInReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
