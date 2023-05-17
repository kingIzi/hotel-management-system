import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterNavsComponent } from './router-navs.component';

describe('RouterNavsComponent', () => {
  let component: RouterNavsComponent;
  let fixture: ComponentFixture<RouterNavsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterNavsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterNavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
