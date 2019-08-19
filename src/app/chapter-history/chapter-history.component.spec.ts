import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterHistoryComponent } from './chapter-history.component';

describe('ChapterHistoryComponent', () => {
  let component: ChapterHistoryComponent;
  let fixture: ComponentFixture<ChapterHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
