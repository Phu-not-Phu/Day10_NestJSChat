import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemWarehouseComponent } from './item-warehouse.component';

describe('ItemWarehouseComponent', () => {
  let component: ItemWarehouseComponent;
  let fixture: ComponentFixture<ItemWarehouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemWarehouseComponent]
    });
    fixture = TestBed.createComponent(ItemWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
