import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodProductionsComponent } from './food-productions.component';

describe('FoodProductionsComponent', () => {
  let component: FoodProductionsComponent;
  let fixture: ComponentFixture<FoodProductionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodProductionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodProductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
