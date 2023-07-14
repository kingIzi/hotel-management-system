import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarLoungeComponent } from './bar-lounge.component';

describe('BarLoungeComponent', () => {
  let component: BarLoungeComponent;
  let fixture: ComponentFixture<BarLoungeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarLoungeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarLoungeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
