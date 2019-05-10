import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterMembersComponent } from './chapter-members.component';

describe('ChapterMembersComponent', () => {
  let component: ChapterMembersComponent;
  let fixture: ComponentFixture<ChapterMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
