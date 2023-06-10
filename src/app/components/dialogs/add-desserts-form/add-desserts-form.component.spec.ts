import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDessertsFormComponent } from './add-desserts-form.component';

describe('AddDessertsFormComponent', () => {
  let component: AddDessertsFormComponent;
  let fixture: ComponentFixture<AddDessertsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDessertsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDessertsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
