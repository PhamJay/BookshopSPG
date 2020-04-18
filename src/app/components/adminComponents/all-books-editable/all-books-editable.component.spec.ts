import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBooksEditableComponent } from './all-books-editable.component';

describe('AllBooksEditableComponent', () => {
  let component: AllBooksEditableComponent;
  let fixture: ComponentFixture<AllBooksEditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBooksEditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBooksEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
