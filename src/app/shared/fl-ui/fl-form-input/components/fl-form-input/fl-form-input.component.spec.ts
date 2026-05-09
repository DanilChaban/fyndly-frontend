import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlFormInputComponent } from '@ui/fl-form-input/components/fl-form-input/fl-form-input.component';

describe('FlFormInputComponent', () => {
  let component: FlFormInputComponent;
  let fixture: ComponentFixture<FlFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlFormInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
