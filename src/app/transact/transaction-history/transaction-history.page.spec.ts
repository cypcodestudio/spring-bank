import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionHistoryPage } from './transaction-history.page';

describe('TransactionHistoryPage', () => {
  let component: TransactionHistoryPage;
  let fixture: ComponentFixture<TransactionHistoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TransactionHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
