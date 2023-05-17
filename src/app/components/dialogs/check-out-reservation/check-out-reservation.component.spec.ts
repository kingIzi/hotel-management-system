import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutReservationComponent } from './check-out-reservation.component';

describe('CheckOutReservationComponent', () => {
  let component: CheckOutReservationComponent;
  let fixture: ComponentFixture<CheckOutReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckOutReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckOutReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
