import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesBillHomeComponent } from './sales-bill-home.component';

describe('SalesBillHomeComponent', () => {
  let component: SalesBillHomeComponent;
  let fixture: ComponentFixture<SalesBillHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesBillHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesBillHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
