import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedReservationComponent } from './booked-reservation.component';

describe('BookedReservationComponent', () => {
  let component: BookedReservationComponent;
  let fixture: ComponentFixture<BookedReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookedReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
