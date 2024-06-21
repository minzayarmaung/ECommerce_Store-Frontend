import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpasswordComponentComponent } from './forgotpassword-component.component';

describe('ForgotpasswordComponentComponent', () => {
  let component: ForgotpasswordComponentComponent;
  let fixture: ComponentFixture<ForgotpasswordComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotpasswordComponentComponent],
    });
    fixture = TestBed.createComponent(ForgotpasswordComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
