import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBanquetProductComponent } from './add-banquet-product.component';

describe('AddBanquetProductComponent', () => {
  let component: AddBanquetProductComponent;
  let fixture: ComponentFixture<AddBanquetProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBanquetProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBanquetProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
