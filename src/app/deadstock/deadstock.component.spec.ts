import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadstockComponent } from './deadstock.component';

describe('DeadstockComponent', () => {
  let component: DeadstockComponent;
  let fixture: ComponentFixture<DeadstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
