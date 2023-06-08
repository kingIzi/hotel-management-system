import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodProductionComponent } from './food-production.component';

describe('FoodProductionComponent', () => {
  let component: FoodProductionComponent;
  let fixture: ComponentFixture<FoodProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodProductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
