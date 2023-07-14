import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolInventoryComponent } from './pool-inventory.component';

describe('PoolInventoryComponent', () => {
  let component: PoolInventoryComponent;
  let fixture: ComponentFixture<PoolInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoolInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
