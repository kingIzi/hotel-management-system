import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBreakfastCategoryComponent } from './add-breakfast-category.component';

describe('AddBreakfastCategoryComponent', () => {
  let component: AddBreakfastCategoryComponent;
  let fixture: ComponentFixture<AddBreakfastCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBreakfastCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBreakfastCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
