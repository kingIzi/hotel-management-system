import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontalOfficeComponent } from './frontal-office.component';

describe('FrontalOfficeComponent', () => {
  let component: FrontalOfficeComponent;
  let fixture: ComponentFixture<FrontalOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontalOfficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontalOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
