import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JointFamilyTreeComponent } from './joint-family-tree.component';

describe('JointFamilyTreeComponent', () => {
  let component: JointFamilyTreeComponent;
  let fixture: ComponentFixture<JointFamilyTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JointFamilyTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JointFamilyTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
