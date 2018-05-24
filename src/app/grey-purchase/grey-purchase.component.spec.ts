import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreyPurchaseComponent } from './grey-purchase.component';

describe('GreyPurchaseComponent', () => {
  let component: GreyPurchaseComponent;
  let fixture: ComponentFixture<GreyPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreyPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreyPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
