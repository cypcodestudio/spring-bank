import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WithdrawPage } from './withdraw.page';

describe('WithdrawPage', () => {
  let component: WithdrawPage;
  let fixture: ComponentFixture<WithdrawPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WithdrawPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
