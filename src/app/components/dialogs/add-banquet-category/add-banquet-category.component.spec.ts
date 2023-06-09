import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBanquetCategoryComponent } from './add-banquet-category.component';

describe('AddBanquetCategoryComponent', () => {
  let component: AddBanquetCategoryComponent;
  let fixture: ComponentFixture<AddBanquetCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBanquetCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBanquetCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
