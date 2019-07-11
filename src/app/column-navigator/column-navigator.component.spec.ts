import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnNavigatorComponent } from './column-navigator.component';

describe('ColumnNavigatorComponent', () => {
  let component: ColumnNavigatorComponent;
  let fixture: ComponentFixture<ColumnNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
