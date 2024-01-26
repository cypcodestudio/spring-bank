import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainAppMenuPage } from './main-app-menu.page';

describe('MainAppMenuPage', () => {
  let component: MainAppMenuPage;
  let fixture: ComponentFixture<MainAppMenuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MainAppMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
