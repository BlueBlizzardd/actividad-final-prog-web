import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInventoryComponent } from './add-inventory.component';

describe('AddInventoryComponent', () => {
  let component: AddInventoryComponent;
  let fixture: ComponentFixture<AddInventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddInventoryComponent]
    });
    fixture = TestBed.createComponent(AddInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
