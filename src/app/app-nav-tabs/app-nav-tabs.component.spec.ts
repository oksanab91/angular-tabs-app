import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavTabsComponent } from './app-nav-tabs.component';

describe('AppNavTabsComponent', () => {
  let component: AppNavTabsComponent;
  let fixture: ComponentFixture<AppNavTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNavTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNavTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
