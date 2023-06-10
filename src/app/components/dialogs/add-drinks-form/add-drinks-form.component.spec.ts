import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDrinksFormComponent } from './add-drinks-form.component';

describe('AddDrinksFormComponent', () => {
  let component: AddDrinksFormComponent;
  let fixture: ComponentFixture<AddDrinksFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDrinksFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDrinksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
