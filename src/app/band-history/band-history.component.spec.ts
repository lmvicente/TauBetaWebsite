import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandHistoryComponent } from './band-history.component';

describe('BandHistoryComponent', () => {
  let component: BandHistoryComponent;
  let fixture: ComponentFixture<BandHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
