import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PurchasePage } from './purchase.page';

describe('PurchasePage', () => {
  let component: PurchasePage;
  let fixture: ComponentFixture<PurchasePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PurchasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
