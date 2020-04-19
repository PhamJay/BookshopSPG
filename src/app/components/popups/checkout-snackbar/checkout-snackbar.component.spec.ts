import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutSnackbarComponent } from './checkout-snackbar.component';

describe('CheckoutSnackbarComponent', () => {
  let component: CheckoutSnackbarComponent;
  let fixture: ComponentFixture<CheckoutSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
