import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlFormCheckboxComponent } from '@ui/fl-form/components/tr-form-checkbox/components/fl-form-checkbox/fl-form-checkbox.component';

describe('FlFormCheckboxComponent', () => {
  let component: FlFormCheckboxComponent;
  let fixture: ComponentFixture<FlFormCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlFormCheckboxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlFormCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
