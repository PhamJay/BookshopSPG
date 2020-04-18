import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAuthorsEditableComponent } from './all-authors-editable.component';

describe('AllAuthorsEditableComponent', () => {
  let component: AllAuthorsEditableComponent;
  let fixture: ComponentFixture<AllAuthorsEditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAuthorsEditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAuthorsEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
