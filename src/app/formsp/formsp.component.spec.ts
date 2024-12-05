import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormspComponent } from './formsp.component';

describe('FormspComponent', () => {
  let component: FormspComponent;
  let fixture: ComponentFixture<FormspComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormspComponent]
    });
    fixture = TestBed.createComponent(FormspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
