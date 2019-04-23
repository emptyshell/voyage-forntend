import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayPackNavComponent } from './holiday-pack-nav.component';

describe('HolidayPackNavComponent', () => {
  let component: HolidayPackNavComponent;
  let fixture: ComponentFixture<HolidayPackNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayPackNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayPackNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
