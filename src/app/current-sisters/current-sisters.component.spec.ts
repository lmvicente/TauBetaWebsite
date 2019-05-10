import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSistersComponent } from './current-sisters.component';

describe('CurrentSistersComponent', () => {
  let component: CurrentSistersComponent;
  let fixture: ComponentFixture<CurrentSistersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentSistersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentSistersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
