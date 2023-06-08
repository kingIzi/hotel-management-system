import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBreakfastProductComponent } from './add-breakfast-product.component';

describe('AddBreakfastProductComponent', () => {
  let component: AddBreakfastProductComponent;
  let fixture: ComponentFixture<AddBreakfastProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBreakfastProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBreakfastProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
