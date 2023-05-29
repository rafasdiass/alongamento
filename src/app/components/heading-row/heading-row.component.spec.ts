import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingRowComponent } from './heading-row.component';

describe('HeadingRowComponent', () => {
  let component: HeadingRowComponent;
  let fixture: ComponentFixture<HeadingRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadingRowComponent]
    });
    fixture = TestBed.createComponent(HeadingRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
