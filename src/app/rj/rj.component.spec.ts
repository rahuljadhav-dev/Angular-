import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RjComponent } from './rj.component';

describe('RjComponent', () => {
  let component: RjComponent;
  let fixture: ComponentFixture<RjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RjComponent]
    });
    fixture = TestBed.createComponent(RjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
